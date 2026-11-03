// ─────────────────────────────────────────────────────────────────────────
//  NEXRA Creative — site content
//  Everything on the site is driven from this file. Edit copy, add projects,
//  swap the contact details, and push — the site updates.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: "NEXRA",
  fullName: "NEXRA Creative",
  domain: "nexracreative.com",
  // Used for <title>, meta description and social previews.
  title: "NEXRA Creative — Content & Marketing for Athletes and Brands",
  description:
    "NEXRA is a content and marketing studio for athletes and brands. Strategy, film and social that builds audiences — and delivers.",
  email: "info@ekoevents.co.uk",
  instagram: "https://instagram.com/nexracreative",
  facebook: "https://facebook.com/nexracreative",
  instagramHandle: "@nexracreative",
};

export const hero = {
  // Keep the headline punchy — it renders very large.
  headline: "Creative that moves audiences.",
  sub: "NEXRA is a content and marketing studio for athletes and brands — strategy, film and social, made to grow an audience.",
  primaryCta: { label: "Start a project", href: "#contact" },
  secondaryCta: { label: "See the work", href: "#work" },
};

// ── Projects ────────────────────────────────────────────────────────────
// To add a film: set `video` to an mp4 URL (self-hosted or a CDN link) and,
// ideally, `poster` to a still image. To show a still only, set `image`.
// Leave both empty and the card shows a tasteful "coming soon" placeholder.
export type Project = {
  client: string;
  title: string;
  category: string;
  year?: string;
  video?: string; // e.g. "/work/messi.mp4"
  poster?: string; // e.g. "/work/messi.jpg"
  image?: string; // fallback still if no video
};

export const projects: Project[] = [
  {
    client: "Lionel Messi",
    title: "Athlete Brand Film",
    category: "Film · Direction",
    year: "2025",
  },
  {
    client: "FIFA",
    title: "Tournament Content",
    category: "Film · Social",
    year: "2025",
  },
  {
    client: "UEFA Champions League",
    title: "Matchday Series",
    category: "Social · Edit",
    year: "2024",
  },
  {
    client: "Universal Music Group",
    title: "Artist Campaign",
    category: "Content · Strategy",
    year: "2024",
  },
  {
    client: "U.S. Army",
    title: "Recruitment Campaign",
    category: "Film · Paid Media",
    year: "2024",
  },
];

// ── About ───────────────────────────────────────────────────────────────
export const about = {
  heading: "What we do",
  body: [
    "We handle it end to end — from the strategy to the final cut. Every piece is made to earn attention, grow an audience and move the numbers that matter.",
  ],
  capabilities: [
    "Strategy",
    "Creative Direction",
    "Film & Edit",
    "Social Content",
    "Paid Media",
    "Brand",
  ],
};

export const contact = {
  heading: "Let's make something.",
  sub: "Tell us about the athlete, the brand, or the idea. We'll take it from there.",
};
