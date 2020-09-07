import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getProducts, filterProductsByTitle } from '../../../redux_store/reducers/products/actions';
import { addProductToCart } from "../../../redux_store/reducers/cart/actions";
import Spinner from '../../Spinner';
import AutoComplete from '../../AutoComplete';
import ProductCardsGallery from '../../ProductCardsGallery/';

function ProductsContainer({ products: { visibleProducts, loading }, getProducts, addProductToCart, filterProductsByTitle }) {

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (loading ? (<Spinner />) : (
    <div className="products">
      < AutoComplete filterProductsByTitle={filterProductsByTitle} />
      <ProductCardsGallery products={visibleProducts} addProductToCart={addProductToCart} />
    </div >
  ));
}

const mapDispatchToProps = {
  getProducts,
  addProductToCart,
  filterProductsByTitle,
}

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);