import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import AddToCartButton from '../../AddToCartButton';

// import styles from '../page.module.scss';

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }: any) {
  const result = await getProductById(params.id);
  console.log(result);
  if (result.length === 0) {
    notFound();
  }

  return (
    <main>
      <h1>{result[0]?.name}</h1>

      <Image
        src={'/images/' + result[0]?.image}
        alt={'image of' + result[0]?.name}
        height="200"
        width="200"
      />
      <AddToCartButton />
    </main>
  );
}
