import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

export const dynamic = 'force-dynamic';

export default function ProductsPage() {
  return (
    <>
      <h1>Honey and more</h1>
      <main>
        {products.map((product) => {
          return (
            <div key={`product ${product.id}`}>
              <Link
                href={`/products/${product.productName.toLowerCase()}`}
                data-test-id="product-<product id>"
              >
                <h2>{product.productName}</h2>
              </Link>

              <Link
                href={`/products/${product.productName}`}
                data-test-id="product-<product id>"
              >
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
