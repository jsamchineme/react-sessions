import React from 'react';

const ProductList = ({
  switchView
}) => {
  return (
    <div>
      <h1>
        OUR AWESOME PRODUCT
        <br/>
        <button className="action-button" onClick={() => switchView('form')}>Create Product</button>
      </h1>
        
        <section id='product-list'>
          <div class='product-item'>
            <header>Product Name</header>
            <div class='product-item-body'>
              <div class='product-price'>N5000</div>
              <div class='product-quantity'>500 In stock</div>
              <div>
                <button class='action-button'>Add To Cart</button>
              </div>
            </div>
          </div>
        </section>

        <section id='cart'>
        </section>
    </div>
  )
}

export default ProductList;