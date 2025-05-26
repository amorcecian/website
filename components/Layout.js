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
        <p>&copy; {new Date().getFullYear()} Aram Morcecian. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout; 