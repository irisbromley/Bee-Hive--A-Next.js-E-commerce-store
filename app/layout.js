import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

export const metadata = {
  icons: '/',
  title: 'Bee Hive: Buzzing with Flavor',
  description:
    'Discover Bee Hive, the ecommerce store buzzing with flavor. Here, you can buy locally-sourced honey and help support our precious fauna and flora',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body>
        <CookieBanner />{' '}
        <header className={styles.header}>
          <nav>
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
        </footer>
      </body>
    </html>
  );
}
