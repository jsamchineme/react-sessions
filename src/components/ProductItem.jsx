import React from 'react';

const ProductItem = ({
  data: {
    id,
    name,
    price,
    quantity,
  },
  addToCart,
  removeFromCart
}) => {
  let buttonAction;
  let buttonText;
  if(addToCart !== undefined) {
    buttonAction = addToCart;
    buttonText = 'Add To Cart';
  } else {
    buttonAction = removeFromCart;
    buttonText = 'Remove from Cart';
  }
  return (
    <div class="product-item">
      <header>{name}</header>
      <div class="product-item-body">
        <div class="product-price">Price: {price}</div>
        <div class="product-quantity">Stock available: {quantity}</div>
        <div><button class="action-button" onClick={() => buttonAction(id)}>{buttonText}</button></div>
      </div>
    </div>
  );
}

export default ProductItem;