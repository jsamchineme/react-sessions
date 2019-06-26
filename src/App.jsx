import React, { useState } from 'react';
import './App.scss';
import ProductList from './components/ProductList';
import CartProductList from './components/CartProductList';


const Root = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 450,
      quantity: 10,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 560,
      quantity: 150,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 100,
      quantity: 100,
    },
  ];

  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (productId) => {
    const product = products.find(item => item.id === productId);
    const updatedCartProducts = [...cartProducts, product];
    setCartProducts(updatedCartProducts);
  }

  const removeFromCart = (productId) => {
    const updatedCartProducts = cartProducts.filter(item => item.id !== productId);
    setCartProducts(updatedCartProducts);
  }

  return (
    <div>
      <h1>Our Awesome Product</h1>

      <ProductList data={products} addToCart={addToCart} />

      <CartProductList data={cartProducts} removeFromCart={removeFromCart} />
    </div>
  )
}

export default Root;