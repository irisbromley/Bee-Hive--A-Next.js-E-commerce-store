'use client';

// import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export function QuantityButtons(props) {
  // const [productQuantity, setProductQuantity] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          // setProductQuantity(productQuantity - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          const itemsInCookie = getParsedCookie('itemsInCookie');
          if (!itemsInCookie) {
            setStringifiedCookie('itemInCookie', { id: props.id, quantity: 1 });
          } else if (
            itemsInCookie.find((itemInCookie) => {
              return itemInCookie.id === props.item.id;
            })
          ) {

            const foundItem = itemsInCookie.find((itemInCookie) => {
            return itemInCookie.id === props.item.id;
          });

          foundItem.quantity++;

          setStringifiedCookie()
          }
        }}
      >
        +
      </button>
    </div>
  );
}
