import '../../global.scss';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../layout.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function IdLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />

      <body>
        <header className={styles.header}>
          <nav>
            <Link href="/"> back to all products </Link>
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
