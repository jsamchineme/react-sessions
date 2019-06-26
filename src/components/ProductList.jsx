import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ data, addToCart }) => {

  const allProducts = data.map((item, index) => {
    return <ProductItem data={item} addToCart={addToCart} />
  });
  
  return (
    <section id="product-list">
      {allProducts}
    </section>
  )
}

export default ProductList;