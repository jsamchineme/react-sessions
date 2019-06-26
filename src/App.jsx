import React, { Component } from 'react';
import './App.scss';
import ProductList from './components/ProductList';
import CartProductList from './components/CartProductList';

class Root extends Component {
  state = {
    products: [
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
    ],
    cart: {
      products: []
    }
  }

  addToCart = (productId) => {
    const product = this.state.products.find(item => item.id === productId);
    this.setState({
      cart: {
        products: [...this.state.cart.products, product]
      }
    });
  }

  removeProduct = (productId) => {
    const products = this.state.cart.products.filter(item => item.id !== productId);

    this.setState({
      cart: {
        products
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            OUR AWESOME PRODUCT
          </h1>
          <ProductList products={this.state.products} addToCart={this.addToCart} />
          <CartProductList products={this.state.cart.products} removeProduct={this.removeProduct}/>
        </div>
      </div>
    )
  }
}

export default Root;