/**
 * ALL SITE COPY LIVES HERE.
 *
 * Rule from the audit: nothing placeholder-looking goes live.
 * Every optional block below renders ONLY when you fill it in:
 *   - site.calendarEmbedUrl   → shows the booking calendar (until then, buttons open an email)
 *   - offer.goLiveDays        → adds "live in N days" to the hero and How it works
 *   - offer.priceAnchor       → price guide in the FAQ and comparison table
 *   - testimonials            → shows the client quotes band
 *   - caseStudy               → shows the case study card
 *   - awardsPhotos            → shows the Two Comma Club award photos in About
 */

export type Photo = { src: string; alt: string; width: number; height: number };

export const site = {
  name: "Design Developer",
  url: "https://www.design-developer.com",
  email: "contact@design-developer.com",
  ctaLabel: "Book Your Free Strategy Call",
  /** Paste your Calendly or GoHighLevel booking URL here, e.g. "https://calendly.com/you/strategy-call". */
  calendarEmbedUrl: "https://calendly.com/contact-adinacall/30min",
};

/** Where every booking button goes: the calendar if connected, otherwise a pre-filled email. */
export const bookingHref = site.calendarEmbedUrl
  ? "/book#calendar"
  : `mailto:${site.email}?subject=${encodeURIComponent("Strategy call request")}&body=${encodeURIComponent(
      "Hi Adina, I'd like to book a strategy call. The busywork I want off my plate first is: "
    )}`;

export const offer = {
  /** e.g. 14 → "live in 14 days". Leave null to hide. */
  goLiveDays: null as number | null,
  /** Price anchor shown in the FAQ and comparison table. Leave empty to hide. */
  priceAnchor: "About one month of a top employee's salary",
  /** How long until clients see results. */
  resultsTimeline: "90 days",
};

export const seo = {
  title: "AI Digital Employees Built on KPIs | Design Developer",
  description:
    "AI digital employees built on KPIs for founders, owners, marketers and creatives. They execute like employees, so your workload goes down. Book a strategy call.",
};

export const founderPhoto: Photo = {
  src: "/images/adina-call.jpg",
  alt: "Adina Call, founder of Design Developer, smiling",
  width: 690,
  height: 660,
};

export const heroPhoto: Photo = {
  src: "/images/adina-desk.jpg",
  alt: "Adina Call smiling at her kitchen counter with her laptop",
  width: 1024,
  height: 681,
};

export const aboutPhoto: Photo = {
  src: "/images/adina-office.jpg",
  alt: "Adina Call in her office, with her Two Comma Club award on the desk behind her",
  width: 1024,
  height: 1539,
};

export const problemPhoto: Photo = {
  src: "/images/adina-typing.jpg",
  alt: "Adina Call smiling while she works on her laptop",
  width: 1024,
  height: 681,
};

export const bookingPhoto: Photo = {
  src: "/images/adina-couch.jpg",
  alt: "Adina Call relaxing on the couch with her French bulldog, her laptop beside her",
  width: 1024,
  height: 681,
};

/** Per-page titles and descriptions for search and sharing. */
export const pages = {
  digitalEmployees: {
    path: "/digital-employees",
    title: "Digital Employee Roles | Design Developer",
    description: "Lead Response, Executive Assistant, SEO Manager and more. Digital employees built on KPIs with a seat on your org board.",
  },
  howItWorks: {
    path: "/how-it-works",
    title: "How It Works: DIY or Done for You | Design Developer",
    description: "Learn to build your own digital employees, or have us build them for you around clear KPIs. Strategy call, build, go live.",
  },
  results: {
    path: "/results",
    title: "Results and Client Stories | Design Developer",
    description: "Case studies and client stories from brands, websites, offers and marketing built by Adina Call.",
  },
  about: {
    path: "/about",
    title: "About Adina Call | Design Developer",
    description: "Founder Adina Call: 2x ClickFunnels Two Comma Club, 10+ years in marketing, Air Force Reserve. AI as support, not replacement.",
  },
  book: {
    path: "/book",
    title: "Book Your Free Strategy Call | Design Developer",
    description: "A free 30-minute strategy call. Map your busywork, pick your first digital employee and its KPIs. Low pressure.",
  },
};

/** Home page: short guide to the child pages. */
export const explore = {
  title: "Explore",
  items: [
    { title: "Digital Employees", text: "The roles you can hire, how each one grows, and how they compare to AI bots and VAs.", href: "/digital-employees" },
    { title: "How It Works", text: "Two ways to work together, the three steps, and where they sit on your org board.", href: "/how-it-works" },
    { title: "Results", text: "Case studies and client stories, with real numbers.", href: "/results" },
    { title: "About Adina", text: "The founder behind it, and why AI should support people, not replace them.", href: "/about" },
  ],
};

export const nav = [
  { label: "Digital Employees", href: "/digital-employees" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
];

export const hero = {
  eyebrow: "The new era of business operations",
  title: "Hire a team that never clocks out.",
  titleAccent: "never clocks out.",
  subtitle:
    "You don't BUY a digital employee. You HIRE one. Built on KPIs, with a seat on your org board. For founders, owners, marketers and creatives ready to work smarter.",
  secondaryCta: { label: "See the roles", href: "/digital-employees" },
  /** Small reassurance line under the buttons. */
  microcopy: "Free. 30 minutes. Low pressure. You leave with a clear plan either way.",
};

export const trust = [
  "2× ClickFunnels Two Comma Club",
  "10+ years in marketing",
  "Air Force Reserve, logistics",
  "Woman-owned business",
];

export const problem = {
  title: "Sound familiar?",
  lines: [
    "It's 6:52 p.m. Your phone buzzes. Missed call. Then a voicemail.",
    "That one stings. Because you paid for that lead.",
    "Another hire? Another salary. Another schedule. Another training.",
    "And the AI tools that promised to save time? One more thing to manage.",
  ],
  turn: "So ask who. A digital employee takes a seat on your org board, owns a KPI, and moves the work that keeps losing to the urgent.",
};

/** Animated example conversation shown after the problem section. */
export const chatDemo = {
  title: "Same lead. Different night.",
  subtitle: "Here's that 6:52 p.m. inquiry when a digital employee is on your team.",
  label: "Example conversation",
  messages: [
    { from: "lead", time: "6:52 PM", text: "Hi! Do you have anything open this week? I'd love help with my marketing." },
    { from: "de", time: "6:52 PM", text: "Hi Sarah! Thanks for reaching out. I have Thursday at 10 or 2 open. Which works better for you?" },
    { from: "lead", time: "6:53 PM", text: "2 works!" },
    { from: "de", time: "6:53 PM", text: "You're booked for Thursday at 2:00. Your confirmation and calendar invite are on the way." },
  ],
  status: "Lead scored 92/100 · Owner notified · CRM updated",
  outcomes: [
    { value: "9 sec", label: "to the first reply" },
    { value: "6:53 PM", label: "call booked, after hours" },
    { value: "0", label: "tasks added to your plate" },
  ],
};

/** Org board animation in How it works. */
export const orgBoard = {
  title: "Where they sit",
  owner: "You",
  ownerRole: "Founder / Owner",
  seats: [
    { name: "Lead Response", kind: "digital" },
    { name: "Executive Assistant", kind: "digital" },
    { name: "Your team", kind: "human" },
    { name: "SEO Manager", kind: "digital" },
    { name: "Content Creator", kind: "digital" },
  ],
  caption: "Digital employees sit next to your people, each with a role and a KPI.",
};

export const rolesIntro = {
  title: "Your next hires",
  subtitle: "Hire it like a person. Each one gets a job description, KPIs and a seat on your org board, trained on your voice and connected to the tools you already use.",
};

/** `sample` is an illustrative example of the kind of output each role produces. Swap in real (anonymized) output when you have it. */
export const roles = [
  {
    role: "Lead Response Specialist",
    does: "Texts new leads in seconds with a lead score and next step, so no inquiry goes cold.",
    sample: {
      kind: "Text to a new lead",
      body: "Hi Sarah, thanks for reaching out about a strategy session! I have Thursday at 10 or 2 open. Which works better for you?",
    },
  },
  {
    role: "Executive Assistant",
    does: "Manages your inbox, calendar, and a daily briefing so you start every day focused.",
    sample: {
      kind: "7 am briefing",
      body: "4 meetings today, 2 new leads overnight (both replied to), 1 invoice overdue. Your 3 pm moved to Friday.",
    },
  },
  {
    role: "SEO Manager",
    does: "Publishes optimized articles and tracks rankings so you get found on Google and in AI search.",
    sample: {
      kind: "Live now on cellregenwellness.com",
      body: "“Hyperbaric Oxygen Therapy in Hood River: What to Know” · “Neurofeedback and Brain Health: A Guide” · “Understanding Metabolic Health and Weight Loss”",
      real: true,
      link: "https://cellregenwellness.com",
    },
  },
  {
    role: "Content Creator",
    does: "Turns your ideas into posts, emails, and scripts on a consistent publishing rhythm.",
    sample: {
      kind: "Draft for your review",
      body: "3 Instagram captions and Tuesday's newsletter are ready, written from your voice notes.",
    },
  },
  {
    role: "Marketing Manager",
    does: "Plans campaigns, coordinates channels, and reports on what's actually driving revenue.",
    sample: {
      kind: "Monthly summary",
      body: "Most new leads came from Google this month. Suggest moving budget from the paused Meta ad.",
    },
  },
  {
    role: "Operations Manager",
    does: "Keeps processes moving, follows up on open loops, and flags issues before they grow.",
    sample: {
      kind: "Open-loop alert",
      body: "Two client onboarding forms are incomplete for tomorrow's kickoffs. Reminders sent to both clients.",
    },
  },
];

export const levels = {
  title: "How a digital employee grows",
  subtitle: "Each one starts by answering leads and takes on more as it proves itself.",
  items: [
    { name: "Respond", icon: "/images/levels/respond.png", line: "Answers leads instantly" },
    { name: "Research", icon: "/images/levels/research.png", line: "Finds and summarizes information" },
    { name: "Create", icon: "/images/levels/create.png", line: "Writes content and copy" },
    { name: "Execute", icon: "/images/levels/execute.png", line: "Completes tasks in your tools" },
    { name: "Schedule", icon: "/images/levels/schedule.png", line: "Runs recurring work on its own" },
    { name: "Own", icon: "/images/levels/own.png", line: "Takes responsibility for a goal" },
    { name: "Improve", icon: "/images/levels/improve.png", line: "Measures results and gets better" },
  ],
};

/** Two offers. Edit the bullets to match exactly what each path includes. */
export const paths = {
  title: "Two ways to work together",
  subtitle: "Learn to build your own digital employees, or have us build them for you.",
  options: [
    {
      name: "Do it yourself",
      for: "For driven owners who want to learn the skill.",
      points: [
        "Learn the same process I use to build digital employees",
        "Build your first digital employee for your own business",
        "Guidance from me as you build",
      ],
      cta: "Ask about DIY",
    },
    {
      name: "Done for you",
      for: "For owners who want it handled.",
      points: [
        "We evaluate your business and send a custom proposal",
        "We build your digital employees around clear KPIs",
        "You review their KPIs weekly while they take on more",
      ],
      cta: "Book a Strategy Call",
      featured: true,
    },
  ],
};

export const howItWorks = {
  title: "How done for you works",
  steps: [
    {
      title: "Strategy call",
      body: "We evaluate your business, map the busywork eating your week, and send a custom proposal.",
    },
    {
      title: "We build and train it",
      body: "We set the KPIs it's responsible for, then train it on your voice, your offers and the tools it will work in.",
    },
    {
      title: "It goes live",
      body: "It starts working the queue. You review its KPIs weekly. Plan on about 90 days to see results.",
    },
  ],
};

export const compare = {
  title: "A chatbot reads a script. A digital employee works the queue.",
  columns: ["Design Developer", "A virtual assistant", "AI bots and tools"],
  rows: [
    { label: "Cost", values: ["Custom proposal, about one month of a top hire's salary", "Ongoing hourly or monthly pay", "Subscriptions plus your time"] },
    { label: "Built on KPIs", values: ["Yes, reviewed weekly", "Depends on the hire", "No, you track it"] },
    { label: "Your workload", values: ["Goes down", "Management time", "Often goes up"] },
    { label: "On your org board", values: ["Yes, with a defined role", "Yes", "No"] },
    { label: "Setup", values: ["Built for you", "You train them", "You build it"] },
    { label: "Works nights and weekends", values: ["Yes", "Usually not", "Only what you set up"] },
    { label: "Knows your business and voice", values: ["Trained on it", "Over time", "Each time you prompt it"] },
    { label: "Who fixes it when it breaks", values: ["We do", "You manage it", "You do"] },
  ],
};

/**
 * Real, named client quotes only (full name, business, city, photo).
 * Example: { quote: "…", name: "Jane Smith", business: "Glow Wellness", city: "Portland, OR", photo: { src: "/images/jane.jpg", alt: "Jane Smith", width: 400, height: 400 } }
 */
export const testimonials: {
  quote: string;
  name: string;
  /** Add business and city when you have them: they make the quote more believable. */
  business?: string;
  city?: string;
  photo?: Photo;
  stars?: number;
  /** Shown in small print under the quote. */
  disclaimer?: string;
}[] = [
  {
    quote:
      "Working with Adina transformed my business fundamentally. In less than 9 months, we grew from $18,000/month to $139,000/month. That's a 672% increase. Her process is systematic: she identifies what actually moves the needle, tests ruthlessly, and scales what works.",
    name: "Dr. Bryan Call",
    business: "Chiropractor & Clinic Owner (Adina's husband)",
    photo: { src: "/images/bryan-call.jpg", alt: "Dr. Bryan Call smiling in his clinic", width: 400, height: 400 },
    stars: 5,
    disclaimer: "Results not typical. Individual results will vary based on effort, experience, and market conditions.",
  },
  {
    quote:
      "Adina was wonderful to work with! She is very passionate about how my business could make money and has been thorough in her research. I'm extremely happy with my deliverables and her work!",
    name: "Momoko Fritz",
    photo: { src: "/images/momoko-fritz.jpg", alt: "Momoko Fritz with her camera", width: 400, height: 400 },
  },
];

/**
 * Real client results only. Never invent numbers.
 * Source: wellflowco.com/case-studies (Adina's agency work).
 */
export const resultsIntro = {
  title: "Results from businesses I've helped build",
  subtitle: "Brands, websites, offers and marketing I've built for clients and my own companies. The same playbook now runs inside your digital employees.",
};

export const caseStudies: {
  client: string;
  business: string;
  website?: string;
  problem: string;
  built: string;
  results: string[];
  photo?: Photo;
}[] = [
  {
    client: "Cell Regen",
    business: "My own wellness clinic · Hood River, OR",
    website: "https://cellregenwellness.com",
    problem: "A new holistic clinic launching during COVID, when wellness was far less mainstream.",
    built: "The brand, website and organic social strategy, and now its first digital employee: an SEO Manager publishing articles.",
    results: ["1.5M+ views on one video", "10,000 new followers from a single viral video"],
  },
  {
    client: "NEU Wellness · Dr. Ali Hamtaee",
    business: "Two-location chiropractic practice · Florida",
    website: "https://neuwc.com",
    problem: "Built around personal injury and insurance collections, the practice wanted to return to its wellness roots.",
    built: "Brand relaunch, new wellness services, a social and content framework, and Facebook and Instagram lead generation.",
    results: ["175+ leads from Facebook and Instagram campaigns", "Moved from insurance collections to a cash-based wellness center"],
  },
  {
    client: "Dr. Bryan Call",
    business: "My husband's chiropractic and regenerative clinic",
    problem: "Needed a cash-based offer to fund medical staff and expand the practice.",
    built: "A new offer, an in-person event strategy, a dedicated Facebook ad, a sales page and a front-desk follow-up system.",
    results: ["Six-figure gross profit in 30 days", "$18K to $139K a month in under 9 months"],
  },
];

/** Values band, shown before About. */
export const beliefs = {
  title: "Creating and building with your time in mind.",
  body: "Your business is meant to be automated, and AI is the way forward to support that productivity, together. We support the efforts of the collective with conscious capitalism. This is for people with imagination who want to create a conscious effort in productivity, so you can build a life you love and live with deeper purpose.",
  points: ["AI as support, not replacement", "Time back for the work only you can do", "Growth that supports the collective"],
};

export const about = {
  title: "I run these in my own businesses first.",
  paragraphs: [
    "I'm Adina Call. I started building websites, scaled into Facebook and Google ads, and earned two ClickFunnels Two Comma Club awards along the way.",
    "After a decade in marketing, building and running multiple companies, and serving as an Air Force Reservist in logistics, I know what it takes to keep a business moving. Every digital employee I build for you, I've run in my own companies first, starting with the SEO Manager that writes for my clinic, Cell Regen.",
  ],
  signature: "Adina Call, Founder",
};

/** Proof of the Two Comma Club awards, shown in About. Leave empty to hide. */
export const awardsPhotos: (Photo & { caption: string })[] = [
  {
    src: "/images/two-comma-club-stage.jpg",
    alt: "Adina Call on stage at Funnel Hacking Live holding a ClickFunnels Two Comma Club award",
    width: 1206,
    height: 773,
    caption: "On stage receiving a Two Comma Club award",
  },
  {
    src: "/images/award-plaque-desk.jpg",
    alt: "A ClickFunnels Two Comma Club award plaque on Adina's desk while she works on her laptop",
    width: 1024,
    height: 681,
    caption: "The plaque on my desk",
  },
];

export const faq = {
  title: "Questions before you book",
  /** Review these answers so they match how you actually work. */
  items: [
    {
      q: "What does it cost?",
      a: offer.priceAnchor
        ? "Pricing depends on an evaluation of your company and a custom proposal. As a guide, it's about what you'd pay a top employee for one month: roughly $8,300 for a $100K-a-year role. You'll have your proposal before anything is built."
        : "It depends on which roles you hire. You'll get a clear price on the strategy call, before anything is built.",
    },
    {
      q: "How long until it's live?",
      a: offer.goLiveDays
        ? `Most digital employees are live within ${offer.goLiveDays} days of the strategy call.`
        : "We'll give you a timeline on the call. Your first role is built and trained before it touches a single lead.",
    },
    {
      q: "How is this different from an AI bot?",
      a: "It works end to end. It has a job description, KPIs and a seat on your org board, and it reports its results like any hire would. Not another tool your team has to remember to use.",
    },
    {
      q: "When will I see results?",
      a: `Plan on about ${offer.resultsTimeline}. Your digital employee gets better every week as it learns your business, your customers and what works.`,
    },
    {
      q: "What data does it access, and who can see it?",
      a: "Only the tools you approve, such as your inbox, calendar or CRM. You keep ownership of your accounts and can remove access at any time.",
    },
    {
      q: "What if it makes a mistake?",
      a: "You review its work weekly, and anything sensitive can be set to wait for your approval. When something's off, we fix it.",
    },
    {
      q: "Is there a long-term contract?",
      a: "We'll walk through the terms on the call so you know exactly what you're agreeing to before you start.",
    },
  ],
};

export const finalCta = {
  title: "Ready to build your digital team?",
  subtitle: "On your free 30-minute strategy call, you'll walk away with:",
  bullets: [
    "The busywork costing you the most, mapped.",
    "Your first digital employee and the KPIs it will own.",
    "A custom proposal if it's a fit. No pressure if it isn't.",
  ],
  ps: "P.S. If you're like me, you've tried the AI tools and ended up with more on your plate. That's exactly why I build these. Bring your numbers to the call. Trust the numbers. Not the pitch.",
  signature: "xo, Adina",
};

export const agencyLine = "Need the website, the ads or the funnel too? We build those as well.";

export const footer = {
  tagline: "AI digital employees built on KPIs for founders, owners, marketers and creatives.",
  links: [
    { label: "Digital Employees", href: "/digital-employees" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Results", href: "/results" },
    { label: "About", href: "/about" },
    { label: "Book a Call", href: "/book" },
    { label: "FAQ", href: "/book#faq" },
    { label: "Privacy", href: "/privacy" },
  ],
};
