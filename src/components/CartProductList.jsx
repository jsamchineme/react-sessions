import React from 'react';
import ProductItem from './ProductItem';

const CartProductList = ({
  products,
  removeProduct
}) => {
  const productList = products.map((item, index) => {
    return (
      <ProductItem key={index} {...item} removeProduct={removeProduct} /> 
    )
  });
  return (
    <section id="cart">
      {productList}
    </section>
  );
}
export default CartProductList;