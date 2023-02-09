import Image from 'next/image';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image
            className={styles.image}
            src="/images/Honig Senf.jpg"
            alt="Honig Senf Flasche"
            width="200"
            height="200"
          />

          <h3>Product Name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed
            mollitia maxime eum atque modi, vitae tempore hic optio doloremque
            quia libero neque molestias harum praesentium quos cumque
            necessitatibus laborum?
          </p>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.image}
            src="/images/fruehlingsbleutenhoney.png"
            alt="Honig Senf Flasche"
            width="200"
            height="200"
          />
          <h3>Product Name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed
            mollitia maxime eum atque modi, vitae tempore hic optio doloremque
            quia libero neque molestias harum praesentium quos cumque
            necessitatibus laborum?
          </p>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.image}
            src="/images/Waldblütenhonig.png"
            alt="Honig Senf Flasche"
            width="200"
            height="200"
          />
          <h3>Product Name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed
            mollitia maxime eum atque modi, vitae tempore hic optio doloremque
            quia libero neque molestias harum praesentium quos cumque
            necessitatibus laborum?
          </p>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.image}
            src="/images/Honigbienenbonbon.png"
            alt="Honig Senf Flasche"
            width="200"
            height="200"
          />
          <h3>Product Name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed
            mollitia maxime eum atque modi, vitae tempore hic optio doloremque
            quia libero neque molestias harum praesentium quos cumque
            necessitatibus laborum?
          </p>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.image}
            src="/images/HonigPekannusskerne.png"
            alt="Honig Senf Flasche"
            width="200"
            height="200"
          />
          <h3>Product Name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed
            mollitia maxime eum atque modi, vitae tempore hic optio doloremque
            quia libero neque molestias harum praesentium quos cumque
            necessitatibus laborum?
          </p>
        </div>
      </div>
    </main>
  );
}
