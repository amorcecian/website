import Link from 'next/link';
import Layout from '../../components/Layout';

export default function MahjongMarqueePrivacy() {
  return (
    <Layout title="Privacy Policy — Mahjong Marquee">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            Last updated: June 29, 2026
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            This Privacy Policy describes how <strong>Mahjong Marquee</strong>{' '}
            (&ldquo;the App&rdquo;), developed by Aram Morcecian
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), collects,
            uses, and shares information when you use our mobile application.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">
            Information We Collect
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We do not directly collect personally identifiable information.
            However, the third-party services integrated into the App may collect
            data as described below.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">
            Third-Party Services
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-2">
            Google AdMob
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            We use Google AdMob to serve advertisements within the App. AdMob may
            collect and use data to provide personalized or non-personalized ads,
            including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1 mb-3">
            <li>Device identifiers (advertising ID)</li>
            <li>IP address and approximate location</li>
            <li>App usage and interaction data</li>
            <li>Device type and operating system</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            On iOS, we request permission through Apple&apos;s App Tracking
            Transparency (ATT) framework before accessing your device&apos;s
            advertising identifier. On Android/iOS, we display a consent form
            (UMP/GDPR) before serving personalized ads in applicable regions. You
            can opt out of personalized advertising at any time through your
            device settings.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            For more information, see Google&apos;s Privacy Policy at{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              https://policies.google.com/privacy
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-2">
            Firebase Analytics &amp; Crashlytics
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            We use Firebase Analytics to understand how players interact with the
            App (e.g., levels played, session length) and Firebase Crashlytics to
            detect and fix technical issues. These services may collect:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1 mb-3">
            <li>Anonymous usage statistics (levels completed, feature usage)</li>
            <li>Crash reports and diagnostic data</li>
            <li>Device information (model, OS version)</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            This data is aggregated and anonymized; we do not use it to identify
            individual users. See Google&apos;s Firebase Privacy information at{' '}
            <a
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              https://firebase.google.com/support/privacy
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-2">
            Firebase Remote Config
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            We use Firebase Remote Config to deliver brand tile configurations and
            in-game content. No personally identifiable information is collected
            through this service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">
            Brand Tiles
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            The App may display branded game tiles. When a brand tile is visible
            on screen for more than 2 seconds, an anonymous impression event is
            logged via Firebase Analytics. No personally identifiable information
            is associated with impression data.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">
            Children&apos;s Privacy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            The App is not directed to children under the age of 13. We do not
            knowingly collect personal information from children. If you believe
            your child has provided personal information through the App, please
            contact us and we will delete it promptly.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">
            Your Choices
          </h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-3">
            <li>
              <strong>Ad personalization:</strong> You can opt out of personalized
              ads in your device settings (iOS: Settings → Privacy → Tracking;
              Android: Settings → Google → Ads → Opt out of Ads Personalization).
            </li>
            <li>
              <strong>Analytics:</strong> You can reset your advertising ID at any
              time in your device settings, which resets analytics associations.
            </li>
            <li>
              <strong>Consent (EU/UK):</strong> If you are located in the EU or
              UK, you will be presented with a consent dialog on first launch in
              accordance with GDPR/UK GDPR requirements. You may withdraw or change
              your consent at any time via the App&apos;s Settings screen.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">
            Data Retention
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Aggregated analytics data is retained according to the default
            retention settings of Firebase and Google AdMob. We do not maintain
            our own servers or databases containing user data.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">
            Security
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            We rely on the security infrastructure provided by Google Firebase and
            Google AdMob. We do not transmit sensitive personal data over the
            internet on our own.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">
            Changes to This Policy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            We may update this Privacy Policy from time to time. Any changes will
            be reflected by the &ldquo;Last updated&rdquo; date at the top of this
            page. Continued use of the App after changes constitutes acceptance of
            the updated policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">
            Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            If you have any questions or concerns about this Privacy Policy, please
            contact us at:
            <br />
            <a
              href="mailto:amorcecian@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              amorcecian@gmail.com
            </a>
          </p>

          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/mahjong-marquee/support"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Need help? Visit Mahjong Marquee Support →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
