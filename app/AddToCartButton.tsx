'use client';

export default function AddToCartButton(props: any) {
  return (
    <button
      data-test-id="product-add-to-cart"
      onClick={() => {
        console.log(props.id);
      }}
    >
      Add to cart
    </button>
  );
}
