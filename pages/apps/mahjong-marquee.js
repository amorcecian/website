import Link from 'next/link';
import Layout from '../../components/Layout';
import { apps } from '../../data/apps';
import { trackGoal, goalFromHref } from '../../components/analytics';

const app = apps.find((a) => a.slug === 'mahjong-marquee');
const linkClass = 'text-blue-600 dark:text-blue-400 hover:underline';

export default function MahjongMarqueeApp() {
  return (
    <Layout title={`${app.name} | QUERY LLC`}>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            {app.name}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            {app.description}
          </p>

          <a
            href={app.googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackGoal(goalFromHref(app.googlePlayUrl))}
            className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Get it on Google Play
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            Coming soon to the App Store.
          </p>

          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-x-6 gap-y-2">
            <Link href={`/support/#${app.slug}`} className={linkClass}>
              Support
            </Link>
            <Link href={app.privacyUrl} className={linkClass}>
              Privacy policy
            </Link>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            Published by QUERY LLC.
          </p>
        </div>
      </div>
    </Layout>
  );
}
