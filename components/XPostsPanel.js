import { trackGoal, goalFromHref } from './analytics';
import { posts } from '../data/posts';
import XLogo from './XLogo';

const RECENT_COUNT = 3;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Pure string formatting (no Date object) so server-render and client
// hydration always agree, regardless of the visitor's locale/timezone.
const formatDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

// Every entry links straight out to the real post on X — there's no local
// "writing" page to land on instead.
const PostEntry = ({ post, isLast }) => (
  <a
    href={post.externalLink}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackGoal(goalFromHref(post.externalLink))}
    className={`block py-4 group ${isLast ? '' : 'border-b border-vercel-border dark:border-vercel-border-dark'}`}
  >
    <p className="text-xs text-vercel-text dark:text-vercel-text-dark opacity-60 mb-1 tabular-nums">
      {formatDate(post.date)}
    </p>
    <p className="text-base font-semibold text-vercel-text dark:text-vercel-text-dark group-hover:text-vercel-accent dark:group-hover:text-vercel-accent-dark transition-colors duration-300">
      {post.title}
      <span className="opacity-30 group-hover:opacity-100 transition-opacity duration-300"> ↗</span>
    </p>
    <p className="text-sm text-vercel-text dark:text-vercel-text-dark opacity-80 mt-1 line-clamp-3">
      {post.excerpt}
    </p>
  </a>
);

const XPostsPanel = () => {
  const recent = posts.slice(0, RECENT_COUNT);

  return (
    <aside className="lg:sticky lg:top-[72px] lg:self-start">
      <p className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-vercel-text dark:text-vercel-text-dark opacity-60 mb-1">
        <XLogo size={11} className="opacity-80" />
        Working notes
      </p>
      <p className="text-sm text-vercel-text dark:text-vercel-text-dark opacity-60 mb-2">
        Numbers from my own work, posted as I hit them. @arammorz
      </p>
      <div>
        {recent.map((post, i) => (
          <PostEntry key={post.slug} post={post} isLast={i === recent.length - 1} />
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-vercel-border dark:border-vercel-border-dark text-sm">
        <a
          href="https://x.com/arammorz"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackGoal(goalFromHref('https://x.com/arammorz'))}
          className="text-vercel-accent dark:text-vercel-accent-dark hover:underline"
        >
          More of these on X →
        </a>
      </div>
    </aside>
  );
};

export default XPostsPanel;
