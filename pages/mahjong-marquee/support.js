import Link from 'next/link';
import Layout from '../../components/Layout';

const faqs = [
  {
    q: 'How do I play Mahjong Marquee?',
    a: 'Mahjong Marquee is a tile-matching solitaire game. Tap two matching, unobstructed tiles to remove them from the board. A tile is "free" when it has no tile on top of it and at least one of its left or right sides is open. Clear the entire board to complete a level. Use hints if you get stuck, and shuffle when no moves remain.',
  },
  {
    q: 'How do ads and consent work?',
    a: 'The game shows ads through Google AdMob to keep it free. If you are in the EU or UK, a consent dialog (UMP/GDPR) appears on first launch before any personalized ads are served. On iOS, you are also asked via Apple’s App Tracking Transparency prompt. You can change or withdraw your consent at any time from the in-game Settings screen, or opt out of personalized ads entirely in your device settings.',
  },
  {
    q: 'How do I restore or recover my progress?',
    a: 'Your level progress is saved locally on your device. If you reinstall the app on the same device, your progress should remain intact. Progress does not currently sync across multiple devices. If your progress was lost after an update or reinstall, please contact us with your device model and OS version and we will help.',
  },
  {
    q: 'The game crashed or a level won’t load. What should I do?',
    a: 'First, try closing and reopening the app, and make sure you are running the latest version from the store. If the problem continues, email us a short description of what happened along with your device model and operating system version so we can reproduce and fix it.',
  },
  {
    q: 'How is my privacy handled?',
    a: 'We do not directly collect personally identifiable information. Third-party services (Google AdMob, Firebase Analytics & Crashlytics) may collect anonymized usage and diagnostic data. See the full Privacy Policy for details.',
  },
  {
    q: 'How do I contact support?',
    a: 'Email us anytime at amorcecian@gmail.com. We read every message and aim to respond within a few business days.',
  },
];

export default function MahjongMarqueeSupport() {
  return (
    <Layout title="Support — Mahjong Marquee">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Mahjong Marquee Support
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Answers to common questions, plus how to reach us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((item) => (
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

          <div className="mt-10 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Still need help? Email us and we&apos;ll get back to you:
              <br />
              <a
                href="mailto:amorcecian@gmail.com?subject=Mahjong%20Marquee%20Support"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                amorcecian@gmail.com
              </a>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/mahjong-marquee/privacy"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read the Mahjong Marquee Privacy Policy →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
