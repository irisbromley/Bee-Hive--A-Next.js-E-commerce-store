'use client';
import { addItemToCart } from '../utils/cart';

export default function AddToCartButton(props: any) {
  return (
    <button
      onClick={() => {
        addItemToCart(props.id, 1);
      }}
    >
      Add to cart
    </button>
  );
}
