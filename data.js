/* APNI DETAILS SIRF YAHAN BADLEIN — website, MCP server aur llms.txt teeno yahin se chalte hain */
const DATA = {
  name: "Aftab",
  domain: "aftab.me",
  linkedin: "https://www.linkedin.com/in/maftabuiux",
  contact: { email: "info.aftabdesigner@gmail.com", phone: "+966581265357", whatsapp: "+966581265357" },
  photo: "images/aftab.jpg",
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
    { slug:"wayment", dark:true, eyebrow:"Wayment · Fintech", date:"",
      title:"Wayment: virtual Visa and Mastercard cards for paying anywhere in the world",
      color:"linear-gradient(135deg,#0b0b0b,#2b2b2b)", mark:"Wayment",
      cover:"images/wayment/cover.webp",
      summary:"A fintech product that issues a virtual Visa or Mastercard in minutes, tops it up with crypto or a local bank card, and gets people paying for global services again. I designed the design system, the Telegram Mini App and the marketing website.",
      stats:[ {value:"30+", label:"components with every state covered"}, {value:"2", label:"themes, light and dark, from one token set"}, {value:"3", label:"card types built around real user needs"} ],
      meta:[ ["Role","Product Designer"], ["Scope","Design system, Telegram Mini App, website"],
             ["Platform","Telegram Mini App on iOS and Android, web"], ["Engagement","Freelance project via Fiverr"] ],
      sections:[
        { heading:"Overview", text:["Wayment issues a virtual Visa or Mastercard in a few minutes, so people can pay for international services and shop at online stores abroad. Cards are topped up with cryptocurrency or a Russian bank card, and the whole experience lives inside a Telegram Mini App."],
          images:[ {src:"images/wayment/overview.webp", caption:"The Wayment Mini App: cards, balance, top-ups and recent activity on one screen"} ] },
        { heading:"The problem", text:["In 2022, Visa and Mastercard cards issued in Russia stopped working outside the country. Overnight, people lost access to things they used every day: Netflix, ChatGPT, Booking.com, the App Store and dozens of work tools. The workarounds were slow, confusing and hard to trust."] },
        { heading:"The solution", text:["Make getting a working card feel as simple as sending a message. Inside Telegram, users pick a card, pay for it and start using it in about two minutes, with clear exchange rates, transparent fees and instant top-ups."] },
        { heading:"Foundations", text:["Before designing screens, I built a system the whole product could grow on."],
          points:[ {title:"Colors and tokens", text:"A core palette organised into design tokens, with matched color pairs for light and dark themes so every screen works in both."},
                   {title:"Typography", text:"Inter as the primary typeface. It renders consistently on iOS, Android and inside Telegram, which matters for a Mini App."},
                   {title:"Components", text:"More than 30 components, each designed with every state it needs: default, pressed, disabled, loading, error and success."} ],
          images:[ {src:"images/wayment/tokens.webp", caption:"Type scale and color tokens for light and dark themes"}, {src:"images/wayment/components.webp", caption:"A slice of the component library"} ] },
        { heading:"Three user needs, three cards", text:["People needed a card for three very different reasons. Instead of one generic product, we designed three cards, each with a clear promise."],
          points:[ {title:"Travel card", text:"For paying at stores, hotels and restaurants while travelling abroad."},
                   {title:"Subscription card", text:"For paying for international services from home: AI tools, streaming, music and apps."},
                   {title:"Premium card", text:"Everything in one: services, online purchases and full use abroad."} ],
          images:[ {src:"images/wayment/travel.webp", caption:"Travel card"}, {src:"images/wayment/subscriptions.webp", caption:"Subscription card"}, {src:"images/wayment/full-services.webp", caption:"Premium card"} ] },
        { heading:"Choosing a card, made easy", text:["A side-by-side view shows what each card is for, what it costs and the current exchange rate, so users can decide in seconds. Getting the card takes one short form and a payment link."],
          images:[ {src:"images/wayment/choose-card.webp", caption:"Comparing cards before choosing"}, {src:"images/wayment/get-card.webp", caption:"Issuing a card: short form, payment method and payment link"} ] },
        { heading:"A card worth showing off", text:["Each card has its own identity with an animated, video-style background, so a virtual card feels as real and premium as a physical one."],
          images:[ {src:"images/wayment/card-design.webp", caption:"Card designs with animated backgrounds"} ] },
        { heading:"Top up in two taps", text:["Users pick an amount, choose bank transfer or crypto, and confirm. A QR payment link covers the moments when paying from another device is easier."],
          images:[ {src:"images/wayment/top-up.webp", caption:"Top-up flow with amount presets and a QR payment link"} ] },
        { heading:"Clear transaction history", text:["Transactions are grouped by day with clear statuses (processing, successful, error), and every payment opens a detailed digital receipt that can be shared."],
          images:[ {src:"images/wayment/history.webp", caption:"Transaction history and a shareable receipt"} ] },
        { heading:"Every flow, every state", text:["Beyond the happy path, I redesigned the full set of user flows, error states and edge cases, in both light and dark themes, so the product holds up in real use."],
          images:[ {src:"images/wayment/flows.webp", caption:"User flows, error states and UI states in light and dark"} ] },
        { heading:"Website", text:["The marketing website explains the product in seconds: which services you can pay for, where the card works, and how to get one in two minutes."],
          images:[ {src:"images/wayment/website.webp", caption:"Wayment marketing website"} ] }
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
    photo: "images/aftab.jpg",
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
