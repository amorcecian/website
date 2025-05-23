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
      <header className="bg-gray-800 dark:bg-gray-900 text-white px-4 py-1 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center h-12">
          <Link href="/" className="text-base font-semibold hover:text-gray-300 leading-none">
            Aram Morcecian
          </Link>
          <div className="flex items-center gap-1 md:gap-2">
            <Link href="/" className="text-sm px-1 md:px-2 hover:text-gray-300 leading-none">
              Resume
            </Link>
            <Link href="/contact" className="text-sm px-1 md:px-2 hover:text-gray-300 leading-none">
              Contact
            </Link>
            <div className="scale-75">
              <DarkModeToggle />
            </div>
          </div>
        </nav>
      </header>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto py-8">
          {children}
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Aram Morcecian. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout; 