import './global.scss';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body>
        {' '}
        <header className={styles.header}>
          <nav>
            <Link href="/products"> Honig und mehr </Link>

            <Link href="/about"> Über uns </Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}> Footer Copyrights Honey</footer>
      </body>
    </html>
  );
}
