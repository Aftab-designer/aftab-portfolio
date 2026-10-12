/* APNI DETAILS SIRF YAHAN BADLEIN — website, MCP server aur llms.txt teeno yahin se chalte hain */
const DATA = {
  name: "Aftab",
  domain: "aftab.me",
  linkedin: "https://www.linkedin.com/in/maftabuiux",
  headline: "I design products, then I build them.",
  headlineMuted: "Currently Lead Product Designer / Head of Design at Jazi in Riyadh.",
  intro: "For 8+ years, I've designed the moments where people shop, pay and trade, from eCommerce checkouts in Riyadh to crypto exchanges in Dubai. I turn complex journeys into simple, high-converting experiences, backed by scalable design systems and AI-powered workflows.",

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

  /* ===== STORY PAGE =====  photo: "images/aftab.jpg" (GitHub par upload karke path likhein) */
  storyPage: {
    photo: "",
    headline: "From food delivery apps in Lahore to leading design in Riyadh.",
    subtitle: "An 8+ year journey through quick commerce, eCommerce, crypto and fintech, and what each one taught me about designing for real people.",
    sections: [
      { heading: "Where it started",
        text: ["I studied Computer Science at National Textile University, but the part I kept coming back to was never the code on its own. It was the interface: why one screen feels effortless and another makes people give up. Before I had even graduated, I was designing real products used by real customers."] },
      { heading: "Learning at speed",
        text: ["My first design home was Dinosoftlabs in Lahore, and it was the best school I could have asked for. I designed food delivery, grocery and marketplace apps like GoDelivery, Freshly Grocery and Foodies, often several at once.",
               "Quick commerce teaches you fast. Every extra tap costs an order, and a hungry customer will not wait for a confusing menu. I learned to design for speed and clarity on both sides of the marketplace: customers placing and tracking orders in real time, and restaurant owners managing menus and orders behind the scenes."] },
      { heading: "Designing for conversion",
        text: ["At Ajencia, working remotely with clients in the UK, I moved deeper into eCommerce. Projects like Grable, MOOV.US and Glam 7 sharpened my focus on the moments that decide revenue: product discovery, product pages, cart and checkout. Small details in those flows turned out to matter more than any big redesign."] },
      { heading: "Designing for trust",
        text: ["Then came money in its most demanding form. At CoinW in Dubai and later TinyTrader in Kuala Lumpur, I designed crypto trading and investing experiences: onboarding, KYC, market exploration, spot trading and portfolio management. When people put their savings on the line, clarity is not a nice-to-have. It is what trust is made of. I learned to turn dense, high-stakes workflows into calm, confident experiences."] },
      { heading: "Leading today",
        text: ["Today I lead product design at Jazi, a large-scale eCommerce platform in Riyadh. I own the experience end to end, set the UX strategy, run the design system, and redesign the journeys that move the business, from discovery to checkout and the vendor experience.",
               "I also build. I use AI-powered workflows with Claude, Cursor and Figma to research, prototype and ship faster, and I write production-ready front-end so what we design is exactly what users get. I design products, then I build them, and I care most about the small details people feel but rarely notice."] }
    ]
  },

  mcpAsk: [
    "“What has Aftab shipped in eCommerce and crypto?”",
    "“Summarise his experience with design systems.”",
    "“Is he a fit for a senior product design role?”"
  ]
};
DATA.story = DATA.storyPage.sections.flatMap(s => s.text);
if (typeof module !== 'undefined') module.exports = DATA;
