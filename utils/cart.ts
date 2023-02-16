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

  setStringifiedCookie('cart', cart);
  console.log('cart content', cart);
}

export function getCartContent() {
  return;
}

// if item ===cart.item !push to array but add quantity to item
