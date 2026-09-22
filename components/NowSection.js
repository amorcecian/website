import { trackGoal, goalFromHref } from './analytics';

const DAILY_CAST_URL = 'https://dailycast.io?utm_source=website&utm_medium=now-section';

// "Build log" framing (chosen 2026-09-22 from 3 Opus-reviewed options —
// see CLAUDE.md). It's a dated journal entry, not a static product blurb:
// update LAST_UPDATED by hand whenever this copy changes, the same way
// you'd date any other log entry.
const LAST_UPDATED = 'September 2026';

const NowSection = () => (
  <section className="mb-10 pl-5 border-l-2 border-vercel-accent dark:border-vercel-accent-dark">
    <p className="text-xs uppercase tracking-wide text-vercel-text dark:text-vercel-text-dark opacity-60 mb-2">
      Now · updated {LAST_UPDATED}
    </p>
    <h2 className="text-2xl font-bold text-vercel-text dark:text-vercel-text-dark mb-3">
      Building Daily Cast in public
    </h2>
    <p className="text-vercel-text dark:text-vercel-text-dark leading-relaxed mb-4">
      Daily Cast turns the newsletters you subscribe to into a private daily podcast episode. Live: free tier, $10/mo Pro, English and Argentine-Spanish catalogs. Every episode costs $0.08–0.12 to produce, ~90% speech synthesis. That number decided the price and the length cap. I post the engineering, the costs and the mistakes on X as I go.
    </p>
    <div className="text-sm">
      <a
        href={DAILY_CAST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackGoal(goalFromHref(DAILY_CAST_URL))}
        className="text-vercel-accent dark:text-vercel-accent-dark hover:underline"
      >
        dailycast.io →
      </a>
    </div>
  </section>
);

export default NowSection;
