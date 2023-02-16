import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import AddToCartButton from '../../AddToCartButton';
import styles from './individualProduct.module.scss';
import { QuantityButtons } from './QuantityButtons';

// import styles from '../page.module.scss';

export default async function ProductPage({ params }: any) {
  const product = await getProductById(params.id);
  if (!product) {
    notFound();
  }

  return (
    <main>
      <div className={styles.productCard}>
        <h1>{product.name}</h1>
        <Image
          src={'/images/' + product.image}
          alt={'image of' + product.name}
          height="200"
          width="200"
        />
        <p> {product.description}</p>
        <div className={styles.priceAndButton}>
          <p> &euro; {product.price / 100},-</p>
          <QuantityButtons />
          <AddToCartButton
            classname={styles.addToCartButton}
            id={product.id}
          />
        </div>
      </div>
    </main>
  );
}
