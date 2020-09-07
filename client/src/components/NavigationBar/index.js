import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navigationBar.scss';
import { logout } from '../../redux_store/reducers/auth/actions';
import { connect } from 'react-redux';

const NavigationBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const menuRef = useRef(null);
  const [meneHeight, setMeneHeight] = useState(0);

  const authLinks = (
    <Nav className="ml-auto d-flex align-items-center">
      <Link className="nav_link" to='/cart'>
        <i className="fa fa-shopping-cart fa-lg " aria-hidden="true"></i>
      </Link>
      <Link className="nav_link" to='/favorites'>
        <i className="fas fa-heart fa-lg"></i>
      </Link>
      <Link className="nav_link" to='/login' onClick={logout}>
        <i className='fas fa-sign-out-alt fa-lg' />{' '}
      </Link>
    </Nav>
  );

  const guestLinks = (
    <Nav className="ml-auto d-flex align-items-center">
      <Link className="nav_link" to='/login'>
        <i className="fas fa-user fa-lg"></i>
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
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavigationBar);

