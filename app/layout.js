import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body>
        <CookieBanner />{' '}
        <header className={styles.header}>
          <nav>
            <Link href="/about"> About us </Link>
            <Link href="/contact"> Contact </Link>
            <Link href="/cart">
              {' '}
              <Image
                className={styles.image}
                src="/images/shopping-bag.png"
                alt="Shopping Cart"
                width="40"
                height="40"
              />
            </Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}> Footer Bee Happy Honey</footer>
      </body>
    </html>
  );
}
