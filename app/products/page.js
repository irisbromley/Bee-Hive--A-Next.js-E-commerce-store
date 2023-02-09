import Image from 'next/image';
import Link from 'next/link';
import { products } from '../database/products';

export default function ProductsPage() {
  return (
    <>
      <h1>Honey and more</h1>
      <main>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link href={`/products/${product.productName.toLowerCase()}`}>
                <h2>{product.productName}</h2>
              </Link>

              <Link href={`/products/${product.productName}`}>
                <Image
                  src={`/images/${product.productName}.png`}
                  alt={product.productName}
                  width="200"
                  height="200"
                />
              </Link>
            </div>
          );
        })}
      </main>
    </>
  );
}
