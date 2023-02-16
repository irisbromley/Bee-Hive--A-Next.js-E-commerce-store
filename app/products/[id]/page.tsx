import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import AddToCartButton from '../../AddToCartButton';
import styles from './individualProduct.module.scss';
import { QuantityButtons } from './QuantityButtons';

// import styles from '../page.module.scss';

export default async function ProductPage({ params }: any) {
  const result = await getProductById(params.id);
  console.log(result);
  if (result.length === 0) {
    notFound();
  }

  return (
    <main>
      <div className={styles.productCard}>
        <h1>{result[0]?.name}</h1>
        <Image
          src={'/images/' + result[0]?.image}
          alt={'image of' + result[0]?.name}
          height="200"
          width="200"
        />
        <p> {result[0]?.description}</p>
        <div className={styles.priceAndButton}>
          <p> &euro; {result[0]?.price / 100},-</p>
          <QuantityButtons />
          <AddToCartButton
            classname={styles.addToCartButton}
            id={result[0]?.id}
          />
        </div>
      </div>
    </main>
  );
}
