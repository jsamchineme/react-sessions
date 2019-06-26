import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({
  products,
  addToCart
}) => {
  const productList = products.map((item, index) => {
    return (
      <ProductItem key={index} {...item} addToCart={addToCart} />
    )
  });
  return (
    <section id="product-list">
      {productList}
    </section>
  );
}
export default ProductList;