/**
 * Central content store for The PMM Hub.
 *
 * Everything the public site renders is sourced from here so that a future
 * "Studio" backend can edit a single, typed source of truth. Swap these arrays
 * for a CMS / database read later without touching the page components.
 */

export type Workspace = {
  slug: string;
  name: string;
  description: string;
  href: string;
  visibility: "public" | "private";
};

export const workspaces: Workspace[] = [
  {
    slug: "public",
    name: "The Hub",
    description:
      "The public knowledge base — best practices, reading, AI tooling and the agentic-team vision.",
    href: "/",
    visibility: "public",
  },
  {
    slug: "learning",
    name: "My Learning",
    description:
      "A curated learning path — the practices and resources I'd hand a PMM on day one.",
    href: "/learning",
    visibility: "public",
  },
  {
    slug: "studio",
    name: "Studio",
    description:
      "The private backend — draft ideas, unfinished notes and content management.",
    href: "/studio",
    visibility: "private",
  },
];

export const nav = [
  { label: "Best Practices", href: "/best-practices" },
  { label: "Reading", href: "/literature" },
  { label: "AI Tooling", href: "/ai" },
  { label: "Agentic Team", href: "/agentic-team" },
  { label: "Newsletter", href: "/newsletter" },
];

/* ------------------------------------------------------------------ */
/* Best practices                                                      */
/* ------------------------------------------------------------------ */

export type Practice = {
  slug: string;
  title: string;
  summary: string;
  takeaways: string[];
};

export const practices: Practice[] = [
  {
    slug: "positioning",
    title: "Positioning",
    summary:
      "Context is everything. Position the product as the obvious choice for a specific customer in a specific market — not the best product in the abstract.",
    takeaways: [
      "Map your true competitive alternatives — what customers would do if you didn't exist.",
      "Isolate the unique attributes only you have.",
      "Translate attributes into the value customers actually care about.",
      "Define the market category that makes that value obvious.",
    ],
  },
  {
    slug: "messaging",
    title: "Messaging",
    summary:
      "Punchy, specific, customer-first language beats clever copy. Lead with the change you create, not the features you shipped.",
    takeaways: [
      "Write to one buyer, one problem, one outcome at a time.",
      "Cut jargon — if a competitor could say it, it isn't messaging.",
      "Build a hierarchy: narrative → pillars → proof points.",
      "Test messaging with real prospects before you scale it.",
    ],
  },
  {
    slug: "gtm-strategy",
    title: "Go-to-Market Strategy",
    summary:
      "GTM is the system that connects who you sell to, how you reach them, and how they buy. Pick a motion and resource it deliberately.",
    takeaways: [
      "Define a sharp ICP and the segments inside it.",
      "Match the motion to the buyer: PLG, sales-led, or hybrid.",
      "Align marketing, sales and product on a single funnel definition.",
      "Instrument the funnel before optimising it.",
    ],
  },
  {
    slug: "launches",
    title: "Launch Management",
    summary:
      "Not every launch deserves the same effort. Tier launches, run them cross-functionally, and measure adoption — not just announcement reach.",
    takeaways: [
      "Tier launches (T1/T2/T3) by customer and revenue impact.",
      "Run a single launch brief that every team works from.",
      "Separate the 'ship' date from the 'market' moment.",
      "Define success as adoption and pipeline, not press.",
    ],
  },
  {
    slug: "sales-enablement",
    title: "Sales Enablement",
    summary:
      "Enablement is a product you ship to reps. Make the right narrative the easiest one to tell.",
    takeaways: [
      "Battlecards that answer real objections, kept current.",
      "One-pagers and decks built around the customer's problem.",
      "Pitch certification, not just content drops.",
      "Close the loop with win/loss feedback.",
    ],
  },
  {
    slug: "market-intelligence",
    title: "Market Intelligence",
    summary:
      "Win/loss, competitive moves and category shifts are signal. Turn them into decisions, not dashboards nobody reads.",
    takeaways: [
      "Run structured win/loss interviews on a cadence.",
      "Track competitors by the jobs they're winning, not features.",
      "Distill intel into a few decisions per quarter.",
      "Share a tight, opinionated briefing — not a data dump.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Recommended literature                                              */
/* ------------------------------------------------------------------ */

export type Book = {
  title: string;
  author: string;
  why: string;
  topic: string;
  essential?: boolean;
};

export const books: Book[] = [
  {
    title: "Obviously Awesome",
    author: "April Dunford",
    topic: "Positioning",
    why: "The definitive, practical framework for positioning B2B products. The starting point for any PMM.",
    essential: true,
  },
  {
    title: "Sales Pitch",
    author: "April Dunford",
    topic: "Narrative",
    why: "How to build a sales narrative that helps buyers choose — the natural follow-up to positioning.",
  },
  {
    title: "Make It Punchy",
    author: "Emma Stratton",
    topic: "Messaging",
    why: "Cuts through bloated B2B copy. Teaches you to write messaging that's clear, confident and human.",
    essential: true,
  },
  {
    title: "Ogilvy on Advertising",
    author: "David Ogilvy",
    topic: "Advertising",
    why: "Timeless principles on persuasion and craft from the original adman. Still the best on what makes copy work.",
    essential: true,
  },
  {
    title: "Crossing the Chasm",
    author: "Geoffrey A. Moore",
    topic: "GTM",
    why: "The classic on taking a product from early adopters to the mainstream market.",
  },
  {
    title: "Play Bigger",
    author: "Ramadan, Peterson, Lochhead, Maney",
    topic: "Category Design",
    why: "How category creators win by defining the problem before competing on the solution.",
  },
  {
    title: "Positioning",
    author: "Al Ries & Jack Trout",
    topic: "Positioning",
    why: "The original book that put 'positioning' on the map. Foundational mental models.",
  },
  {
    title: "Made to Stick",
    author: "Chip & Dan Heath",
    topic: "Messaging",
    why: "Why some ideas survive and others die — and how to make yours memorable.",
  },
];

/* ------------------------------------------------------------------ */
/* AI tooling                                                          */
/* ------------------------------------------------------------------ */

export type AiTool = {
  name: string;
  vendor: string;
  bestFor: string[];
  watchOut: string;
  rating: "Daily driver" | "Strong" | "Situational";
};

export const aiTools: AiTool[] = [
  {
    name: "Claude (Opus & Sonnet)",
    vendor: "Anthropic",
    rating: "Daily driver",
    bestFor: [
      "Long-form messaging, narrative and brand voice",
      "Nuanced editing and tone control",
      "Working across large context (decks, transcripts, docs)",
    ],
    watchOut:
      "Give it your positioning and examples up front — it rewards a well-framed brief.",
  },
  {
    name: "GPT / Codex",
    vendor: "OpenAI",
    rating: "Strong",
    bestFor: [
      "Structured outputs and quick drafts",
      "Code, automations and data wrangling",
      "Brainstorming breadth",
    ],
    watchOut:
      "Tends toward generic B2B voice — push hard on specificity and proof.",
  },
  {
    name: "Gemini",
    vendor: "Google",
    rating: "Situational",
    bestFor: [
      "Multimodal research and summarisation",
      "Pulling from the broader Google ecosystem",
    ],
    watchOut: "Verify claims — strong at breadth, looser on craft.",
  },
];

/* ------------------------------------------------------------------ */
/* Agentic marketing team — the vision                                 */
/* ------------------------------------------------------------------ */

export type Discipline = {
  name: string;
  role: string;
};

export const disciplines: Discipline[] = [
  { name: "Strategy", role: "Sets the ICP, segmentation and GTM motion." },
  { name: "Brand", role: "Guards voice, narrative and visual consistency." },
  { name: "Content", role: "Turns the narrative into articles, posts and assets." },
  { name: "PMM", role: "Owns positioning, messaging and launches." },
  { name: "Release Notes", role: "Translates shipped work into customer value." },
  { name: "Sales Enablement", role: "Equips reps with battlecards and pitch." },
  { name: "Customer Enablement", role: "Drives adoption, onboarding and advocacy." },
  { name: "Market Intelligence", role: "Feeds win/loss and competitive signal back in." },
];

/* ------------------------------------------------------------------ */
/* Newsletter                                                          */
/* ------------------------------------------------------------------ */

export type Post = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
};

export const posts: Post[] = [
  {
    slug: "positioning-is-a-team-sport",
    title: "Positioning is a team sport",
    date: "2026-06-02",
    readingTime: "4 min",
    excerpt:
      "Why the best positioning work happens in a room with sales, product and a few honest customers — not in a PMM's doc.",
  },
  {
    slug: "kill-the-feature-list",
    title: "Kill the feature list",
    date: "2026-05-19",
    readingTime: "3 min",
    excerpt:
      "Feature lists feel productive and convert nobody. A simple swap that makes your homepage actually land.",
  },
  {
    slug: "launch-tiers-that-stick",
    title: "Launch tiers that actually stick",
    date: "2026-05-05",
    readingTime: "5 min",
    excerpt:
      "A lightweight tiering system that stops every launch from becoming a fire drill.",
  },
];

/* ------------------------------------------------------------------ */
/* My Learning — a starting path                                       */
/* ------------------------------------------------------------------ */

export type LearningStep = {
  step: number;
  title: string;
  detail: string;
};

export const learningPath: LearningStep[] = [
  {
    step: 1,
    title: "Learn positioning first",
    detail:
      "Read Obviously Awesome and run the framework on a product you know. Everything else builds on this.",
  },
  {
    step: 2,
    title: "Write messaging that's punchy",
    detail:
      "Use Make It Punchy to rewrite a real homepage. Get feedback from someone outside marketing.",
  },
  {
    step: 3,
    title: "Map a go-to-market motion",
    detail:
      "Pick a SaaS product and sketch its ICP, segments and buying motion end to end.",
  },
  {
    step: 4,
    title: "Run a tiered launch",
    detail:
      "Plan a fictional T1 launch with a single brief and a cross-functional checklist.",
  },
  {
    step: 5,
    title: "Build an enablement asset",
    detail:
      "Create one battlecard and one pitch one-pager. Pressure-test them against objections.",
  },
];

/* ------------------------------------------------------------------ */
/* Studio — private drafts (would be auth-gated in production)         */
/* ------------------------------------------------------------------ */

export type Note = {
  id: string;
  title: string;
  status: "idea" | "drafting" | "needs-review";
  updated: string;
  body: string;
};

export const privateNotes: Note[] = [
  {
    id: "n-001",
    title: "Agentic team — orchestration model",
    status: "idea",
    updated: "2026-06-14",
    body: "Sketch a coordinator agent that hands briefs to discipline agents. Open question: shared memory vs. per-agent context. Revisit after testing handoffs.",
  },
  {
    id: "n-002",
    title: "Newsletter: 'The death of the feature page'",
    status: "drafting",
    updated: "2026-06-10",
    body: "Half-written. Needs a stronger opening hook and one real before/after example. Maybe pair with the kill-the-feature-list post.",
  },
  {
    id: "n-003",
    title: "Positioning workshop template",
    status: "needs-review",
    updated: "2026-06-08",
    body: "Dunford framework as a fill-in worksheet. Works, but section 4 (market category) confuses people — rewrite the prompt.",
  },
];
