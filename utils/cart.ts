const cart: Array<{ id: number; quantity: number }> = [];

export function addItemToCart(id: number, quantity: number) {
  console.log('addItemToCart', id, quantity);
  const item = { id, quantity };
  cart.push(item);
  console.log('cart content', cart);
}

export function getCartContent() {
  return;
}
