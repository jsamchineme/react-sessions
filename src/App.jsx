import React, { useState } from 'react';
import './App.scss';
import ProductList from './components/ProductList';
import CartProductList from './components/CartProductList';


const Root = () => {
  let products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      quantity: 100,
    },
    {
      id: 2,
      name: 'Product 1',
      price: 100,
      quantity: 100,
    },
    {
      id: 3,
      name: 'Product 1',
      price: 100,
      quantity: 100,
    },
    {
      id: 4,
      name: 'Product 1',
      price: 100,
      quantity: 100,
    },
  ];

  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (productId) => {
    const product = products.find(item => item.id === productId);
    const productInCart = cartProducts.find(item => item.id === productId);
    if(!productInCart) {
      const updatedCartProducts = [...cartProducts, product];
      setCartProducts(updatedCartProducts);
    }
  }

  const removeProduct = (productId) => {
    const products = cartProducts.filter(item => item.id !== productId);
    setCartProducts(products);
  }

  return (
    <div>
      <div>
        <h1>
          OUR AWESOME PRODUCT
        </h1>
        <ProductList products={products} addToCart={addToCart} />
        <CartProductList products={cartProducts} removeProduct={removeProduct}/>
      </div>
    </div>
  )
}

export default Root;