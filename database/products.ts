import { sql } from './connect';

export function getAllProducts() {
  return sql`SELECT * FROM products`;
}

export function getProductById(id: number) {
  return sql`SELECT * FROM products WHERE id=${id}`;
}
