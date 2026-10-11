// Plain-text summary served at /llms.txt (see vercel.json)
const D = require('../data.js');

module.exports = (req, res) => {
  const site = `https://${D.domain}`;
  const t = [
    `# ${D.name}`,
    ``,
    `> ${D.headline} ${D.headlineMuted}`,
    ``,
    D.intro,
    ``,
    `## Experience`,
    ...D.experience.map(x => `- ${x.company} (${x.date}) — ${x.role}: ${x.text}`),
    ``,
    `## Case studies`,
    ...D.work.map(w => `- [${w.title}](${site}/#/work/${w.slug}) (${w.date}): ${w.summary}`),
    ``,
    `## Posts`,
    ...D.posts.map(p => `- ${p.title}: ${p.text}`),
    ``,
    `## Story`,
    ...D.story,
    ``,
    `## Links`,
    `- Site: ${site}`,
    `- MCP: ${site}/api/mcp`,
    `- LinkedIn: ${D.linkedin}`,
  ].join('\n');
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(t);
};
