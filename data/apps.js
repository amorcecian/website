// Apps published by QUERY LLC. /support/ renders one section per entry, so a
// new app only needs a new object here (plus its own /apps/<slug>/ page if it
// needs a marketing URL).
export const SUPPORT_EMAIL = 'support@morcecian.com.ar';

export const apps = [
  {
    slug: 'mahjong-marquee',
    name: 'Mahjong Marquee',
    description: 'A relaxing tile-matching mahjong solitaire game for Android and iOS.',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.aram.mahjongmarquee',
    privacyUrl: '/mahjong-marquee/privacy/',
    faqs: [
      {
        q: 'Where is my progress saved?',
        a: 'Your progress is saved on your device. It is not synced between devices, and deleting the app or clearing its data can remove it.',
      },
      {
        q: 'Why does the game show ads?',
        a: 'Ads keep Mahjong Marquee free to play. You can turn off personalized ads at any time in your device settings or from the in-game Settings screen.',
      },
      {
        q: 'How do I report a bug?',
        a: `Email ${SUPPORT_EMAIL} with a short description of what happened, your device model, your OS version, and the app version. A screenshot helps a lot.`,
      },
    ],
  },
];
