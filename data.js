/* APNI DETAILS SIRF YAHAN BADLEIN — website, MCP server aur llms.txt teeno yahin se chalte hain */
const DATA = {
  name: "Aftab",
  domain: "aftab.me",
  linkedin: "https://www.linkedin.com/in/maftabuiux",
  headline: "I design products, then I build them.",
  headlineMuted: "Currently [company / project ka naam] par kaam kar raha hoon.",
  intro: "[2-3 lines: kitne saal ka experience, kis industry mein, kaunsa impact. Misal: For the past X years, I've designed and built ... ]",

  experience: [
    { company:"[Company 1]", tag:"[short tagline]", date:"[Year-Now]", role:"[Your role]",
      text:"[Is role mein aap ne kya kiya, kya ship kiya, kya impact aaya.]" },
    { company:"[Company 2]", tag:"[short tagline]", date:"[Year-Year]", role:"[Your role]",
      text:"[Description]" },
    { company:"[Company 3]", tag:"[short tagline]", date:"[Year-Year]", role:"[Your role]",
      text:"[Description]" },
    { company:"[Company 4]", tag:"[short tagline]", date:"[Year]", role:"[Your role]",
      text:"[Description]" },
  ],

  work: [
    { slug:"crx-admin", title:"[Case study 1 — misal: CRX trading admin dashboard]", date:"[Dates]",
      color:"linear-gradient(135deg,#1e1b4b,#6d28d9 60%,#2563eb)", mark:"Case 01",
      summary:"[1-2 lines: problem, aap ka role, outcome]",
      role:"[Role]", team:"[Team]", time:"[Timeline]",
      body:[
        ["Problem","[Kya masla tha?]"],
        ["Process","[Research, wireframes, iterations…]"],
        ["Solution","[Final design aur kyun]"],
        ["Outcome","[Numbers / results]"]
      ]},
    { slug:"case-2", title:"[Case study 2]", date:"[Dates]",
      color:"linear-gradient(135deg,#f97362,#fb923c)", mark:"Case 02",
      summary:"[Summary]", role:"[Role]", team:"[Team]", time:"[Timeline]",
      body:[["Problem","[…]"],["Solution","[…]"],["Outcome","[…]"]]},
    { slug:"case-3", title:"[Case study 3]", date:"[Dates]",
      color:"linear-gradient(135deg,#064e3b,#10b981)", mark:"Case 03",
      summary:"[Summary]", role:"[Role]", team:"[Team]", time:"[Timeline]",
      body:[["Problem","[…]"],["Solution","[…]"],["Outcome","[…]"]]},
  ],

  /* art: dashboard | mobile | chat | component | palette | chart */
  posts: [
    { title:"Trading admin, but calm", art:"dashboard", color:"linear-gradient(135deg,#0f172a,#1e293b)",
      text:"Admin panels for trading platforms usually shout at you: red, green, blinking numbers everywhere. I tried the opposite on an AI trading dashboard. Neutral surfaces, colour only where a decision is needed, and alerts that wait their turn. Operators scanned the overview much faster in early tests." },
    { title:"A prompt box with states", art:"chat", color:"linear-gradient(135deg,#4c1d95,#7c3aed)",
      text:"Most AI inputs are one textarea pretending to do everything. I broke it into states: idle, typing, attaching, thinking and error. Each one gets its own small motion so you always know what the model is doing. Built in React with a single state machine." },
    { title:"Status pills that don't lie", art:"component", color:"linear-gradient(135deg,#0e7490,#22d3ee)",
      text:"A tiny component with a big job. Pending, active, failed, paused, each with colour, icon and text so it still works for colour-blind users and in dark mode. Shipped as one token-driven component instead of five copies." },
    { title:"Building a palette from one colour", art:"palette", color:"linear-gradient(135deg,#a16207,#facc15)",
      text:"Pick one brand colour and generate a full 50 to 900 scale with contrast checks baked in. I wanted something that tells you instantly which text colour is safe on which background, without opening a separate checker." },
    { title:"Charts for people who skim", art:"chart", color:"linear-gradient(135deg,#166534,#4ade80)",
      text:"Experimenting with chart defaults: direct labels instead of legends, one highlighted series, everything else in grey. Less to decode, faster to read. Small change, big difference on busy dashboards." },
    { title:"Onboarding in three screens", art:"mobile", color:"linear-gradient(135deg,#9f1239,#fb7185)",
      text:"How short can onboarding get before it stops working? This concept does it in three screens: who you are, what you want, and a first win. Everything else moves to the moment it's actually needed." },
  ],

  story: [
    "I started out pushing pixels in design tools, making screens that looked good in a mockup and then watching them change once they reached the browser. That gap between the design and what shipped bothered me more than anything else.",
    "So I learned front-end development. Not to switch careers, but to close that gap myself. Once I could build what I designed, my designs changed too: fewer impossible states, more attention to spacing, motion and how components behave with real data.",
    "Today I work across both sides, designing interfaces and building polished, production-ready components, most recently on admin tooling for an AI trading platform. I care about the small details users feel but rarely notice.",
    "Next, I want to keep working on products where design and engineering sit at the same table, and where good UI makes complex things feel simple."
  ],

  mcpAsk: [
    "“What has Aftab shipped in [domain]?”",
    "“Summarise his experience with design systems.”",
    "“Is he a fit for a senior product design role?”"
  ]
};
if (typeof module !== 'undefined') module.exports = DATA;
