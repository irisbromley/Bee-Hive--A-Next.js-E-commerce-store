import { getCartContent } from '../../utils/cart';

export default function CartPage() {
  const cartObject = getCartContent();
  console.log('cartobject', cartObject);
  return (
    <main>
      <p>Your Cart</p>
      <p>All your items in the Cart</p>
      <button>Go to checkout</button>
    </main>
  );
}
