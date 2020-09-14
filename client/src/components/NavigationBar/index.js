import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navigationBar.scss';
import { logout } from '../../redux_store/reducers/auth/actions';
import { connect } from 'react-redux';
import { getCartProductsLength } from '../../redux_store/reducers/cart/cart.utils';

const NavigationBar = ({ auth: { isAuthenticated, loading }, logout, cartProducts }) => {
  const menuRef = useRef(null);
  const [meneHeight, setMeneHeight] = useState(0);



  const authLinks = (
    <Nav className="ml-auto d-flex align-items-center">
      {cartProducts.length > 0 ? (
        <Link className={`nav_link`} to='/cart'>
          <i className="fa fa-shopping-cart fa-2x " aria-hidden="true"></i>
          <span className="cart_has_products"> {(getCartProductsLength(cartProducts))}</span>

        </Link>
      ) : (<Link className={`nav_link`} to='/cart'>
        <i className="fa fa-shopping-cart fa-2x " aria-hidden="true"></i>
      </Link>)}

      <Link className="nav_link" to='/login' onClick={logout}>
        <i className='fas fa-sign-out-alt fa-2x' />{' '}
      </Link>
    </Nav>
  );

  const guestLinks = (
    <Nav className="ml-auto d-flex align-items-center">
      <Link className="nav_link" to='/login'>
        <i className="fas fa-user fa-2x"></i>
      </Link>
    </Nav>
  );


  useEffect(() => {
    setMeneHeight(menuRef.current.clientHeight);
  }, []);


  return (
    <>
      <div style={{ height: `${meneHeight}px`, width: "100%" }}></div>
      <Navbar ref={menuRef} fixed="top" bg="dark" variant="dark">
        <Navbar.Brand >
          <Link className="nav_link" to="/">
            BALIPRODUCT
        </Link>
        </Navbar.Brand>
        {!loading && (
          <React.Fragment>{
            isAuthenticated ? authLinks : guestLinks}
          </React.Fragment>
        )}
      </Navbar >
    </>
  );
}


const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavigationBar);

