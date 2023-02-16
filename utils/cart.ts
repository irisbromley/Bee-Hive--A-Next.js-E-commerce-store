import { getParsedCookie, setStringifiedCookie } from './cookies';

const cart: Array<{ id: number; quantity: number }> =
  getParsedCookie('cart') ?? [];

export function addItemToCart(id: number, quantity: number) {
  console.log('addItemToCart', id, quantity);
  const item = { id, quantity };
  cart.push(item);
  setStringifiedCookie('cart', cart);
  console.log('cart content', cart);
}

export function getCartContent() {
  return;
}
