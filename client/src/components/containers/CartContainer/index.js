import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { getCartTotal } from '../../../redux_store/reducers/cart/cart.utils';
import { removeProductFromCart, updateProductQuantity } from '../../../redux_store/reducers/cart/actions';
import CartProduct from '../../CartProduct';
import './cartContainer.scss';

export function CartContainer({ products, removeProductFromCart, updateProductQuantity }) {

  const [total, setTotal] = useState(0)


  useEffect(() => {
    setTotal(getCartTotal(products))
    return () => {
    }
  }, [setTotal, products]);


  return (
    <div className="cart container-fluid p-0">
      <div className=" d-flex justify-content-around align-items-center mb-5 pb-4 pt-4" style={{ backgroundColor: "#d6d6d6" }} >
        <p className='cart_total'>Total$: {total.toFixed(2)} </p>
        <button type="button" className='btn btn_checkout'>checkout</button>

      </div>
      <div className="container cart_products pb-5">
        {products.map((product, index) => (
          <CartProduct
            key={index}
            product={product}
            updateProductQuantity={updateProductQuantity}
            removeProductFromCart={removeProductFromCart}
          />))}
      </div>

    </div >
  );
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
  cartTotal: state.cart.total,
  isAuthenticated: state.auth.isAuthenticated

});

const mapDispatchToProps = {
  removeProductFromCart,
  updateProductQuantity,
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);