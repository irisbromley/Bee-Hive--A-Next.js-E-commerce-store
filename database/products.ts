import { sql } from './connect';

export function getAllProducts() {
  return sql`SELECT * FROM products`;
}

export async function getProductById(id: number) {
  const result = await sql<{ product: string }[]>`

  SELECT * FROM
  products
  WHERE id=${id}`;
  return result[0];
}
