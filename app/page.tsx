import Image from 'next/image';
import Link from 'next/link';
import { getAllProducts } from '../database/products';

export default async function HomePage() {
  const products = await getAllProducts();
  console.log(products);
  return (
    <main>
      
      <ul>
        {products.map((product) => {
          return (
            <li key={`product ${product.id}`}>
              <Image
                src={'/images/' + product.image}
                alt={product.name}
                width="200"
                height="200"
              />
              <Link href={'/products/' + product.id.toString()}>
                {product.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
