import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

export const metadata = {
  icons: '/favicon.ico',
  title: 'Bee Hive: Buzzing with Flavor',
  description:
    'Discover Bee Hive, the ecommerce store buzzing with flavor. Here, you can buy locally-sourced honey and help support our precious fauna and flora',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body className={styles.body}>
        <CookieBanner />{' '}
        <header className={styles.header}>
          <nav>
            <Link href="/">
              {' '}
              <Image
                className={styles.cartImage}
                src="/images/002-bee.png"
                alt="Bee"
                width="40"
                height="40"
              />
            </Link>
            <div>Bee Hive - Buzzing with Flavor </div>
            <Link href="/cart">
              {' '}
              <Image
                className={styles.cartImage}
                src="/images/shopping-bag.png"
                alt="Shopping Cart"
                width="40"
                height="40"
              />
            </Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          {' '}
          Bee Hive: Buzzing with Flavor
          <div>
            Icons made by{' '}
            <a
              href="https://www.flaticon.com/authors/smashicons"
              title="Smashicons"
            >
              Smashicons
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{' '}
            <a
              href="https://www.flaticon.com/authors/amonrat-rungreangfangsai"
              title="amonrat rungreangfangsai"
            >
              amonrat rungreangfangsai
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
