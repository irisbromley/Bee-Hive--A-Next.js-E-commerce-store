import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body>
        {' '}
        <header>
          <nav>
            <Link href="/"> Home </Link>
            <Link href="/products"> Products </Link>
          </nav>
        </header>
        This is above{children}this is below
      </body>
    </html>
  );
}
