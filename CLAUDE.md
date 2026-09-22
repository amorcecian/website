# CLAUDE.md

Aram Morcecian's personal site (morcecian.com.ar). Next.js 15 (Pages Router), statically exported (`output: 'export'` in `next.config.mjs`), Tailwind CSS. No backend — every integration has to work as a static site (client-side JS, or a form posting straight to a third party).

## Structure

- `pages/index.js` — résumé/homepage. `resumeData` is a plain JS object; edit it directly to change experience/skills/education. Layout: full-width header, then a full-width `NowSection`, then a two-column grid below (`lg:grid-cols-[minmax(0,1fr)_320px]`) — main résumé content on the left, `XPostsPanel` sticky on the right. On mobile it collapses to one column with the sidebar's content ordered right after `NowSection`, above the résumé (via `order-1`/`order-2` + `lg:order-*`). There's no big card wrapper around the whole page anymore (removed 2026-09-22) — sections sit on the page background directly so they don't nest inside a card next to the sidebar.
- `data/posts.js` — the single source of truth for X post content shown on the site: `date`, `title`, `slug` (React key only, not a route), `externalLink` (the X status URL), `excerpt` (one short paragraph, not the full thread — there's no full-text archive page). Add an entry when a thread actually goes out on X. **Only add threads that have actually been posted** — never pre-add scheduled/unsent content.
- `components/XPostsPanel.js` — the homepage sidebar, labeled **"Working notes"** (not "Latest from X" — reframed 2026-09-22, chosen from Opus-generated options; see below) + 3 most-recent excerpts (title, excerpt clamped to 3 lines, date formatted `D MMM YYYY` via a pure-string `formatDate`, no `Date` object, to avoid SSR/client hydration mismatches), then "More of these on X →". **Every entry links straight out to X (`post.externalLink`, `target="_blank"`)** — there is no `/writing` page or internal archive; Aram explicitly rejected that (2026-09-22: "if someone clicks on the x post, it should take them to X, not to the writing section"). Don't reintroduce an internal posts page without asking. Visual design (flat list, hairline dividers, no card) was reviewed with Opus before implementing — see the rationale below before changing it again.
- `pages/contact.js` — contact form that opens a `mailto:` link (no backend, so no real form submission).
- `components/Layout.js` — header/nav/footer wrapper used by every page. Nav is just "Resume" and "Contact" (no "Writing" link — removed with the page).
- `components/XLogo.js` — the real X (formerly Twitter) brand mark as an inline SVG. `lucide-react`'s `X` export is the generic close/dismiss glyph, not the logo — don't use it for the X link in the header or anywhere else; use `XLogo` instead.
- `components/NowSection.js` — the "Now" block, **"build log" framing** (chosen 2026-09-22 from 3 Opus-generated options: "the ledger" metrics-band, "the build log" dated journal entry, "the datasheet" spec-table+CTA — see below): a dated label (`Now · updated <LAST_UPDATED>`, update that constant by hand whenever the copy changes), a 2px left accent rule instead of a filled card, and two footer links (`dailycast.io →`, `the build thread on X →`). An email-capture form (Buttondown) was built and wired in on 2026-09-22, then removed the same day on Aram's explicit instruction — he didn't want a newsletter-signup feature bundled with the Daily Cast blurb, and decided against the subscription feature entirely. **Don't re-add an email capture without asking first.**
- `components/analytics.js` — Cloudflare Web Analytics goal tracking via a pushState trick (Cloudflare's free tier has no custom-event API). `goalFromHref()` maps a link's href to a goal name (`dailycast-click`, `x-profile-click`, `x-thread-click` for `x.com/*/status/*` links, etc.) — extend it there rather than hardcoding new goal names inline, so tracking stays consistent across pages.

## Conventions

- Colors are Tailwind tokens defined in `tailwind.config.js` (`vercel-bg`, `vercel-text`, `vercel-accent`, `vercel-border`, each with a `-dark` variant). Use these, not raw Tailwind grays, to stay consistent with the rest of the site and support dark mode via the `dark:` variant.
- No new npm dependencies were added for the Now/Writing/X-sidebar work — everything is plain React, in keeping with the site's minimal existing stack (`lucide-react` is the only UI dependency). Tailwind's built-in `line-clamp-*` utilities are used in the sidebar (Tailwind 3.4 ships this in core, no plugin needed).
- Outbound links should call `trackGoal(goalFromHref(href))` on click, matching the existing pattern in `index.js` and `contact.js`.
- **No em dashes in visible copy** (headings, body text, link labels) — Aram flagged one in `NowSection.js` on 2026-09-22 as reading "very AI made" and had it rephrased into two sentences instead. Numeric ranges like `$0.08–0.12` (en dash) are fine; a `—` used to join clauses is not. Check new copy for this before shipping it.

## Why the sidebar looks the way it does

Rejected an embedded-tweet look and a boxed-card look on purpose: with a two-column layout, boxed cards next to more boxed cards (skills/experience already use `bg-gray-100` cards) got visually noisy. The sidebar instead uses a flat list with thin `border-b` hairlines between entries — quieter, matches the plain "NOW" label styling already on the page, and fits the "boring, reliable, no AI hype" brand voice this whole site/X account is going for. If redesigning this again, keep that constraint in mind rather than defaulting to another card.

## Source of truth for X/Daily Cast content

The `../personal-brand` repo (sibling directory) owns the actual posting plan, content bank, and Buffer scheduling for @arammorz. `data/posts.js` here should be treated as a mirror of what's already gone out there, not authored independently — check that repo (`singles-batch-1.md`, `singles-batch-2-tech.md`) for thread text and dates before adding a new entry.

## NowSection + sidebar design options (2026-09-22)

Aram wasn't happy with the first `NowSection` (a filled card bundling a Daily Cast blurb + an email form — the form is gone, see above) and separately wanted the X sidebar reframed. Two Opus design-consult passes ran; Aram picked from the results via AskUserQuestion with rendered previews:

- **NowSection**: 3 options were "the ledger" (no card, a flush stat band with $/episode, TTS %, pricing, catalogs above a 2-line body), "the build log" (dated journal entry, left accent rule, **chosen**), "the datasheet" (bordered container, CTA button, right-column spec table). If asked to redesign this again, know these were already tried/rejected and why (ledger = numbers-first but colder; datasheet = highest conversion but most "landing-page-like", which cuts against the site's plain voice).
- **XPostsPanel**: reframed from a generic "Latest from X" feed label to "Working notes" (point-of-view framing: these are numbers from his own work, not a social feed) — alternative considered was "From the build" (rejected, "Working notes" felt right). Kept the existing flat-list/hairline visual structure, just changed the label, sub-line, footer copy, and made the date/arrow treatment slightly more "log-like" (tabular dates, always-visible arrow instead of hover-only).

## Known TODOs

- [ ] `data/posts.js` currently has 2 entries (career-arc, cost-per-episode). Add new ones as more X threads go out — see the source-of-truth note above.

## Contact row alignment (2026-09-22 fix)

The header contact row (`pages/index.js`, the phone/email/location/LinkedIn/X row) was a CSS grid with `justify-items-center`, which centered each item independently within its column and made icons visually misalign since item text lengths differ. Fixed by switching to `flex flex-wrap items-center justify-center gap-x-8 gap-y-3` instead — keep it a flex row, not a fixed-column grid, if you touch this again.

## Deployment

`npm run build` runs `next build`, which (via `output: 'export'`) also statically exports to `out/`. Both `.next/` and `out/` are gitignored. See `README.md` for hosting options (GitHub Pages is what the repo's `.github/workflows` targets).
