import { sql } from './connect';

export function getAllProducts(){
  return sql`SELECT * FROM products`
}
