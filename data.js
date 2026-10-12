/* APNI DETAILS SIRF YAHAN BADLEIN — website, MCP server aur llms.txt teeno yahin se chalte hain */
const DATA = {
  name: "Aftab",
  domain: "aftab.me",
  linkedin: "https://www.linkedin.com/in/maftabuiux",
  headline: "I design products, then I build them.",
  headlineMuted: "Currently Lead Product Designer / Head of Design at Jazi in Riyadh.",
  intro: "For the past 8+ years, I've designed eCommerce, quick commerce, crypto and fintech products across Saudi Arabia, the UAE, Malaysia, the UK and Pakistan, from 50+ food delivery and grocery apps to crypto exchanges used by traders every day. I focus on conversion-driven UX, scalable design systems and AI-powered design workflows.",

  experience: [
    { company:"Jazi", tag:"Large-scale eCommerce in Saudi Arabia", date:"Feb 25-Now", role:"Lead Product Designer / Head of Design",
      text:"Own end-to-end product design for Jazi's eCommerce mobile app, from discovery to launch. Set the UX strategy and lead the design system, redesigned product discovery, cart, checkout and vendor journeys for conversion, and introduced AI-powered workflows for research, ideation and prototyping." },
    { company:"TinyTrader", tag:"Trading app, Kuala Lumpur", date:"Aug 24-Feb 25", role:"Lead Product Designer",
      text:"Led product design for the TinyTrader mobile and web app, from UX strategy and user flows to high-fidelity UI and interactive prototypes. Established consistent UI patterns and reusable components, and worked closely with developers for a smooth handoff." },
    { company:"CoinW", tag:"Global crypto exchange, Dubai", date:"Feb 23-Nov 24", role:"Product Designer",
      text:"Designed the CoinW crypto trading app across onboarding, market exploration, spot trading, portfolio and account management. Simplified complex trading workflows, kept UI patterns consistent across the app, and partnered with product and engineering to ship user-centered solutions." },
    { company:"Ajencia", tag:"eCommerce for UK clients, remote", date:"Sep 20-May 23", role:"Product Designer (part-time)",
      text:"Designed eCommerce websites and mobile experiences for UK clients, including Grable, Glam 7 and MOOV.US. Improved product pages, cart and checkout flows for conversion, taking projects from user flows to polished, developer-ready UI." },
    { company:"Dinosoftlabs", tag:"Food delivery & grocery apps, Lahore", date:"Oct 18-Jul 21", role:"UX/UI Designer",
      text:"Designed 50+ mobile apps and web interfaces across food delivery, grocery and marketplace platforms, including GoDelivery, Freshly Grocery, Foodies, Groupy and Binder, covering end-to-end flows, wireframes and responsive UI." },
  ],

  skills: {
    design: ["Product design", "UX strategy", "Design systems", "Interaction design", "Prototyping", "UX research", "Usability testing"],
    engineering: ["Figma", "FigJam", "Framer", "Webflow", "Claude", "Cursor", "Maze", "Miro"],
    analytics: ["Google Analytics", "Hotjar", "Mixpanel", "Amplitude", "A/B testing"],
    domains: ["eCommerce", "Quick commerce", "Crypto & Web3", "Fintech & trading", "SaaS", "AI products"]
  },

  /* ===== CASE STUDIES =====
     Images: GitHub par "images/<slug>/" folder mein upload karein, phir yahan path likhein,
     misal: { src:"images/crx-admin/journey.png", caption:"..." }
     src khali ("") ho to placeholder box dikhega — image daalte hi asli picture aa jayegi.
     Har section mein jitni chahein images add karein. */
  work: [
    { slug:"crx-admin", eyebrow:"CRX · Admin dashboard", date:"[Dates]",
      title:"[Case study 1 — misal: Designing the admin dashboard for an AI trading platform]",
      color:"linear-gradient(135deg,#1e1b4b,#6d28d9 60%,#2563eb)", mark:"Case 01",
      cover:"",
      summary:"[1-2 lines: problem, aap ka role, outcome]",
      stats:[ {value:"[e.g. 40%]", label:"[faster task completion]"}, {value:"[e.g. 12]", label:"[core flows redesigned]"} ],
      meta:[ ["Role","[Product designer & front-end]"], ["Timeline","[e.g. 8 weeks]"], ["Product","[CRX admin]"],
             ["Scope","[Research, UX, UI, components]"], ["Collaboration","[PM, 3 engineers]"], ["Period","[2026]"] ],
      sections:[
        { heading:"The problem", text:["[Kya masla tha? Users kaun the, unhein kya takleef thi?]"],
          images:[ {src:"", caption:"[Current journey map / purane dashboard ka screenshot]"} ] },
        { heading:"The goal", text:["[Hum kya achieve karna chahte the]"],
          points:[ {title:"[Clear]", text:"[Principle 1]"}, {title:"[Fast]", text:"[Principle 2]"}, {title:"[Safe]", text:"[Principle 3]"} ] },
        { heading:"Research & workshop", text:["[Interviews, workshops, audits — kya seekha]"],
          images:[ {src:"", caption:"[Workshop board]"}, {src:"", caption:"[User flow diagram]"} ] },
        { heading:"Design decisions", numbered:[ {title:"[Decision 1]", text:"[Kyun]"}, {title:"[Decision 2]", text:"[Kyun]"}, {title:"[Decision 3]", text:"[Kyun]"} ],
          images:[ {src:"", caption:"[Early wireframes / explorations]"} ] },
        { heading:"Final experience", text:["[Final design ka walkthrough]"],
          images:[ {src:"", caption:"[Final screens]"}, {src:"", caption:"[Component library]"} ] },
        { heading:"Outcome", text:["[Results, numbers, feedback]"],
          images:[ {src:"", caption:"[Metrics / feedback screenshot]"} ] },
        { heading:"Takeaways", numbered:[ {title:"[Lesson 1]", text:""}, {title:"[Lesson 2]", text:""}, {title:"[Lesson 3]", text:""} ] }
      ]},
    { slug:"case-2", eyebrow:"[Product · Feature]", date:"[Dates]", title:"[Case study 2]",
      color:"linear-gradient(135deg,#f97362,#fb923c)", mark:"Case 02", cover:"",
      summary:"[Summary]",
      stats:[ {value:"[Number]", label:"[What it means]"} ],
      meta:[ ["Role","[Role]"], ["Timeline","[Timeline]"], ["Team","[Team]"] ],
      sections:[
        { heading:"The problem", text:["[…]"], images:[ {src:"", caption:"[Image caption]"} ] },
        { heading:"Solution", text:["[…]"], images:[ {src:"", caption:"[Image caption]"}, {src:"", caption:"[Image caption]"} ] },
        { heading:"Outcome", text:["[…]"] }
      ]},
    { slug:"case-3", eyebrow:"[Product · Feature]", date:"[Dates]", title:"[Case study 3]",
      color:"linear-gradient(135deg,#064e3b,#10b981)", mark:"Case 03", cover:"",
      summary:"[Summary]",
      stats:[ {value:"[Number]", label:"[What it means]"} ],
      meta:[ ["Role","[Role]"], ["Timeline","[Timeline]"], ["Team","[Team]"] ],
      sections:[
        { heading:"The problem", text:["[…]"], images:[ {src:"", caption:"[Image caption]"} ] },
        { heading:"Solution", text:["[…]"], images:[ {src:"", caption:"[Image caption]"}, {src:"", caption:"[Image caption]"} ] },
        { heading:"Outcome", text:["[…]"] }
      ]},
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
    "Over 8+ years that took me from food delivery and grocery apps in Lahore, to eCommerce for UK brands, to crypto trading in Dubai and Kuala Lumpur. Today I lead product design at Jazi in Riyadh, working across both sides: designing the experience and building polished, production-ready components. I care about the small details users feel but rarely notice.",
    "Next, I want to keep working on products where design and engineering sit at the same table, and where good UI makes complex things feel simple."
  ],

  mcpAsk: [
    "“What has Aftab shipped in eCommerce and crypto?”",
    "“Summarise his experience with design systems.”",
    "“Is he a fit for a senior product design role?”"
  ]
};
if (typeof module !== 'undefined') module.exports = DATA;
