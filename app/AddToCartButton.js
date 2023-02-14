'use client';

export default function AddToCartButton() {
  return (
    <button
      onClick={() => {
        console.log('added to cart');
      }}
    >
      Add to cart
    </button>
  );
}
