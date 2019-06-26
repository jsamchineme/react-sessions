import React from 'react';

const ProductItem = ({
  id,
  name,
  price,
  quantity,
  addToCart,
  removeProduct,
}) => {
  let Button;
  if(addToCart) {
    Button = <button className="action-button" onClick={() => addToCart(id)}>Add To Cart</button>    
  } else {
    Button = <button className="action-button" onClick={() => removeProduct(id)}>Remove</button>
  }
  return (
    <div className="product-item">
      <header>{name}</header>
      <div className="product-item-body">
        <div className="product-price">Price: {price}</div>
        <div className="product-quantity">Stock available: {quantity}</div>
        <div>
          {Button}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;