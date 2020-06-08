
import React, { useContext } from 'react';
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <a href="/" className="navbar-brand text-light" >JAMstack Cart</a>
        <a href="/cart" className="btn btn-success btn-lg ml-3" >
          <i className="fa fa-shopping-cart"></i> Cart &nbsp;
          <span className="badge badge-light">0</span>
        </a>
      </nav>

    </>
  );
};
export default Navbar;

