import Link from 'next/link';
import Layout from '../components/Layout';
import { apps, SUPPORT_EMAIL } from '../data/apps';
import { trackGoal, goalFromHref } from '../components/analytics';

const linkClass = 'text-blue-600 dark:text-blue-400 hover:underline';

export default function Support() {
  const mailto = `mailto:${SUPPORT_EMAIL}`;

  return (
    <Layout title="Support | QUERY LLC">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Support, QUERY LLC
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            QUERY LLC is the company behind Aram Morcecian&apos;s mobile games and apps.
            This page covers support for all of them.
          </p>

          <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-10">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Contact
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Email{' '}
              <a
                href={mailto}
                onClick={() => trackGoal(goalFromHref(mailto))}
                className={`${linkClass} font-medium`}
              >
                {SUPPORT_EMAIL}
              </a>
              . Please mention which app you&apos;re writing about. We reply within 2 business days.
            </p>
          </div>

          {apps.map((app) => {
            const appMailto = `${mailto}?subject=${encodeURIComponent(`${app.name} support`)}`;
            return (
              <section key={app.slug} id={app.slug} className="mb-10 last:mb-0">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {app.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  <Link href={app.privacyUrl} className={linkClass}>
                    Privacy policy
                  </Link>
                  {' · '}
                  <Link href={`/apps/${app.slug}/`} className={linkClass}>
                    About the app
                  </Link>
                  {' · '}
                  <a
                    href={appMailto}
                    onClick={() => trackGoal(goalFromHref(appMailto))}
                    className={linkClass}
                  >
                    Email support
                  </a>
                </p>

                <div className="space-y-6">
                  {app.faqs.map((item) => (
                    <div key={item.q}>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                        {item.q}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
