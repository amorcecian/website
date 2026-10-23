import Head from 'next/head';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

const Layout = ({ children, title = 'Aram Morcecian - Portfolio' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <header className="bg-vercel-bg dark:bg-vercel-bg-dark text-vercel-text dark:text-vercel-text-dark px-4 py-1 sticky top-0 z-50 border-b border-vercel-border dark:border-vercel-border-dark">
        <nav className="container mx-auto flex justify-between items-center h-12">
          <Link href="/" className="text-base font-semibold hover:text-vercel-accent dark:hover:text-vercel-accent-dark leading-none">
            Aram Morcecian
          </Link>
          <div className="flex items-center gap-1 md:gap-2">
            <Link href="/" className="text-sm px-1 md:px-2 hover:text-vercel-accent dark:hover:text-vercel-accent-dark leading-none">
              Resume
            </Link>
            <Link href="/contact" className="text-sm px-1 md:px-2 hover:text-vercel-accent dark:hover:text-vercel-accent-dark leading-none">
              Contact
            </Link>
            <div className="scale-75">
              <DarkModeToggle />
            </div>
          </div>
        </nav>
      </header>
      <main className="min-h-screen bg-vercel-bg dark:bg-vercel-bg-dark text-vercel-text dark:text-vercel-text-dark transition-colors duration-300">
        <div className="container mx-auto py-8">
          {children}
        </div>
      </main>
      <footer className="bg-vercel-bg dark:bg-vercel-bg-dark text-vercel-text dark:text-vercel-text-dark text-center p-4 border-t border-vercel-border dark:border-vercel-border-dark">
        <p>&copy; {new Date().getFullYear()} QUERY LLC. All rights reserved.</p>
        <p className="mt-1 text-sm opacity-70">
          QUERY LLC is the company behind Aram Morcecian&apos;s mobile games and apps.
        </p>
        <p className="mt-2 text-sm flex justify-center gap-4">
          <Link href="/apps/mahjong-marquee/" className="hover:text-vercel-accent dark:hover:text-vercel-accent-dark">
            Apps
          </Link>
          <Link href="/support/" className="hover:text-vercel-accent dark:hover:text-vercel-accent-dark">
            Support
          </Link>
          <Link href="/contact/" className="hover:text-vercel-accent dark:hover:text-vercel-accent-dark">
            Contact
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Layout; 