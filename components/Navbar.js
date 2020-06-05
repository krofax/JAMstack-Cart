
import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <h3><a href="/">JAMstack Cart</a></h3>
      <a href="/cart" className="btn btn-outline-primary my-2 my-sm-0">Cart</a>
    </nav>
  );
};
export default Navbar;

