'use client';

import { useState } from 'react';

export function QuantityButtons(props) {
  const [productQuantity, setProductQuantity] = useState(1);

  return (
    <>
      <button
        onClick={() => {
          setProductQuantity(productQuantity - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setProductQuantity(productQuantity + 1);
        }}
      >
        +
      </button>
    </>
  );
}
