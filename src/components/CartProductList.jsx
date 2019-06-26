import React from 'react';
import ProductItem from './ProductItem';

const CartProductList = ({ data, removeFromCart }) => {

  const allProducts = data.map((item, index) => {
    return <ProductItem data={item} removeFromCart={removeFromCart}/>
  });
  
  return (
    <section id="cart">
      {allProducts}
    </section>
  )
}

export default CartProductList;