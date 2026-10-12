// MCP server — Streamable HTTP, stateless, no auth. Vercel serverless function at /api/mcp
const D = require('../data.js');

const site = `https://${D.domain}`;
const work = () => D.work.map(w => ({ title: w.title, date: w.date, summary: w.summary, url: `${site}/#/work/${w.slug}` }));

const TOOLS = {
  search_portfolio: {
    description: 'Search everything: roles, case studies, posts, story. Use this first.',
    inputSchema: { type: 'object', properties: { query: { type: 'string' } }, required: ['query'] },
    run: ({ query = '' }) => {
      const q = query.toLowerCase();
      const items = [
        ...D.experience.map(x => ({ type: 'role', ...x })),
        ...D.work.map(w => ({ type: 'case_study', title: w.title, summary: w.summary, sections: w.sections })),
        ...D.posts.map(p => ({ type: 'post', title: p.title, text: p.text })),
        ...D.story.map(s => ({ type: 'story', text: s })),
      ];
      const hits = items.filter(i => JSON.stringify(i).toLowerCase().includes(q));
      return hits.length ? hits : { note: 'No direct match. Try get_profile or get_work_history.' };
    },
  },
  get_profile: {
    description: 'Who I am and what I am working on now.',
    run: () => ({ name: D.name, headline: `${D.headline} ${D.headlineMuted}`, intro: D.intro, linkedin: D.linkedin, site }),
  },
  get_work_history: { description: 'Every role, newest first.', run: () => D.experience },
  get_case_studies: { description: 'Case studies with summaries and links.', run: work },
  read_case_study: {
    description: 'Full text of a case study (by slug or title), or "story" for the story page.',
    inputSchema: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'] },
    run: ({ id = '' }) => {
      if (id.toLowerCase() === 'story') return { title: 'Story', text: D.story.join('\n\n') };
      const w = D.work.find(x => x.slug === id || x.title.toLowerCase().includes(id.toLowerCase()));
      return w ? { title: w.title, summary: w.summary, stats: w.stats, meta: Object.fromEntries(w.meta || []),
                   sections: (w.sections || []).map(s => ({ heading: s.heading, text: (s.text || []).join('\n\n'),
                     points: [...(s.points || []), ...(s.numbered || [])], images: (s.images || []).map(i => i.caption) })) }
               : { error: `Not found. Available: ${D.work.map(x => x.slug).join(', ')}, story` };
    },
  },
  list_posts: { description: 'Titles of experiments on the posts page.', run: () => D.posts.map(p => p.title) },
  get_skills: {
    description: 'Skills grouped by design, engineering and domains.',
    run: () => D.skills || { design: ['UI/UX', 'Design systems', 'Prototyping'], engineering: ['HTML/CSS', 'JavaScript', 'React'], domains: ['Admin dashboards', 'AI products'] },
  },
};

const ok = (id, result) => ({ jsonrpc: '2.0', id, result });
const err = (id, code, message) => ({ jsonrpc: '2.0', id, error: { code, message } });

function handle(msg) {
  const { id, method, params = {} } = msg;
  if (id === undefined) return null; // notification
  switch (method) {
    case 'initialize':
      return ok(id, {
        protocolVersion: params.protocolVersion || '2025-06-18',
        capabilities: { tools: {} },
        serverInfo: { name: `${D.name.toLowerCase()}-portfolio`, version: '1.0.0' },
        instructions: `Answer questions about ${D.name}'s work using these tools. Everything here is public on ${site}.`,
      });
    case 'ping': return ok(id, {});
    case 'tools/list':
      return ok(id, { tools: Object.entries(TOOLS).map(([name, t]) => ({ name, description: t.description, inputSchema: t.inputSchema || { type: 'object', properties: {} } })) });
    case 'tools/call': {
      const t = TOOLS[params.name];
      if (!t) return err(id, -32602, `Unknown tool: ${params.name}`);
      return ok(id, { content: [{ type: 'text', text: JSON.stringify(t.run(params.arguments || {}), null, 2) }] });
    }
    default: return err(id, -32601, `Method not found: ${method}`);
  }
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'content-type, mcp-protocol-version, mcp-session-id');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).setHeader('Allow', 'POST').end();

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { return res.status(400).json(err(null, -32700, 'Parse error')); } }
  if (!body) return res.status(400).json(err(null, -32600, 'Invalid request'));

  const out = Array.isArray(body) ? body.map(handle).filter(Boolean) : handle(body);
  if (out === null || (Array.isArray(out) && !out.length)) return res.status(202).end();
  res.status(200).json(out);
};
module.exports.handle = handle;
