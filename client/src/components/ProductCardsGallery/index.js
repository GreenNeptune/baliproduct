import React from 'react';
import ProductCard from '../ProductCard.js/ProductCard';
import './productsCardGallery.scss'

function ProductCardsGallery({ products, addProductToCart }) {
  return (
    <div className="wrapper">
      <div className="products_card_gallery ">
        {products.map(product =>
          <ProductCard
            key={product._id}
            product={product}
            addProductToCart={addProductToCart}
          />
        )}
      </div>
    </div>
  );
}

export default ProductCardsGallery;