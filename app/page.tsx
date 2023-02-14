import Image from 'next/image';
import { getAllProducts } from '../database/products';

export default async function HomePage() {
  const products = await getAllProducts();
  console.log(products);
  return (
    <main>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Image
                src={'/images/' + product.image}
                alt={product.name}
                width="200"
                height="200"
              />
              {product.name}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
