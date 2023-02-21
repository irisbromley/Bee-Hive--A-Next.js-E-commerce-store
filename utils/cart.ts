import { getProductById } from '../database/products';
import { getParsedCookie, setStringifiedCookie } from './cookies';

const cart: Array<{ id: number; quantity: number }> =
  getParsedCookie('cart') ?? [];

export function addItemToCart(id: number, quantity: number) {
  const existingItem = cart.find((item) => id === item.id);
  if (existingItem) {
    const newQuantity = quantity + existingItem.quantity;
    existingItem.quantity = newQuantity;
  } else {
    const item = { id, quantity };
    cart.push(item);
  }

  setStringifiedCookie('cart', cart); // store this to getParsedCookie
  console.log('cart content', cart);
}

interface Cart {
  lines: Array<{
    quantity: number;
    unitPrice: number;
    productName: string;
    productImage: string;
    lineTotal: number;
  }>;
  total: number;
}

export async function getCartContent(): Promise<Cart> {
  for (const item of cart) {
    const result = await getProductById(item.id);
    console.log(result);
  }
  return {} as any;
}
