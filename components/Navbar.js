
import React, {useContext} from 'react';
import cartContext from './contextCart'
const Navbar = (props) => {
  const { cart } = useContext(cartContext)
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <a href="/" className="navbar-brand text-light" >Smashing Stores</a>
        <a href="/cart" className="btn btn-success btn-lg ml-3" >
          <i className="fa fa-shopping-cart"></i> Cart &nbsp;
          <span className="badge badge-light">{cart.length}</span>
        </a>
      </nav>
      
      </>
  );
};
export default Navbar;

