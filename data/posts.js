// Threads are added here by hand as they're posted on X — copy the opening
// line(s) over as the excerpt and add the externalLink. Every click on the
// homepage sidebar goes straight to the real post on X, there's no local
// archive page, so only an excerpt is kept (not the full thread text).
// Keep this to things that have actually been published; don't pre-add
// scheduled/unsent posts. Newest first — the sidebar shows the first
// RECENT_COUNT entries (see components/XPostsPanel.js).
export const posts = [
  {
    slug: 'cost-per-episode',
    date: '2026-09-21',
    title: 'What a Daily Cast episode actually costs',
    externalLink: 'https://x.com/188609514/status/2102012625554948503',
    excerpt:
      "A Daily Cast episode costs me between 8 and 12 cents to make. About 90% of that is text to speech. The model that writes the script is close to a rounding error. That cost forced the episode length cap before I even set a price.",
  },
  {
    slug: 'career-arc',
    date: '2026-09-09',
    title: 'From level-3 Windows support to shipping AI products solo',
    externalLink: 'https://x.com/188609514/status/2097656844562878771',
    excerpt:
      "In 2010, I was doing level-3 Windows support in Buenos Aires. In 2026, I ship AI products solo, from the same city. Nothing about that path was planned. Here's what actually changed at each step.",
  },
];
