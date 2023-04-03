import { getCartContent } from '../../utils/cart';

export default function CartPage() {
  const cartObject = getCartContent();
  console.log(cartObject);
  return (
    <main>
      <p>Your Cart</p>
      <p>All your items in the Cart</p>
      <button>Go to checkout</button>
    </main>
  );
}
