import Image from 'next/image.js';
import { notFound } from 'next/navigation';
import AddToCartButton from '../../AddToCartButton';
import { products } from '../../database/products.js';

// import styles from '../page.module.scss';

// {
//   id: 1,
//   productName: 'Frühlingsblütenhonig',
//   type: 'honey',
// },
// { id: 2, productName: 'Waldblütenhonig', type: 'honey' },
// { id: 3, productName: 'Chilihonig', type: 'honey' },
// { id: 4, productName: 'Honigbienenbonbon', type: 'other' },
// { id: 5, productName: 'HonigPekannusskerne', type: 'other' },
// { id: 6, productName: 'Bienenwachs Propolis Seife', type: 'other' },
// { id: 7, productName: 'Honig Senf', type: 'other' },
// { id: 8, productName: 'Moor Destillerie Moorbiene', type: 'other' },

export const dynamic = 'force-dynamic';

export default function ProductPage({ params }) {
  const singlePage = products.find((product) => {
    return product.productName.toLowerCase() === params.productName;
  });
  console.log(singlePage);
  if (!singlePage) {
    notFound();
  }
  return (
    <main>
      <h1>The single product page</h1>
      <Image />
      <AddToCartButton />
    </main>
  );
}
