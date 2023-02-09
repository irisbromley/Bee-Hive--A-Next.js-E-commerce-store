import { products } from '../database/products.js';

// {
//   id: 1,
//   productName: 'Frühlingsblütenhonig',
//   type: 'honey',
// },
// { id: 2, productName: 'Waldblütenhonig', type: 'honey' },
// { id: 3, productName: 'Chilihonig', type: 'honey' },
// { id: 4, productName: 'Honigbienenbonbon', type: 'other' },
// { id: 5, productName: 'HonigPekannusskerne', type: 'other' },
// { id: 6, productName: 'Bienenwachs Propolis Seife', type: 'other' },
// { id: 7, productName: 'Honig Senf', type: 'other' },
// { id: 8, productName: 'Moor Destillerie Moorbiene', type: 'other' },

export default function ProductPage(props) {
  const singlePage = products.find((product) => {
    return product.productName.toLowerCase() === props.params.productName;
  });
  console.log(singlePage);
  return <h1>The single product page</h1>;
}
