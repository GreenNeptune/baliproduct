import React, { Fragment } from 'react';

function Product({ title, price, img }) {
  return (
    <Fragment>
      <img className="product_img" src={img} alt="" />
      <div className="product_description">
        <p className="product_title">{title}</p>
        <p className="product_price">{price}$</p>
      </div>
    </Fragment>
  );
}

export default Product;
