'use client';

import { getCartContent } from '../../utils/cart';

export default function CartPage() {
  const cartObject = getCartContent();
  return (
    <main>
      <p>Your Cart</p>
      <p>All your items in the Cart</p>

    </main>
  );
}