
import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {

  constructor(props) {
    super(props);
  }
 render() {
      return (
        <div>
          <div className="container mt-4">
            <div className="row">
              {/* Map through the product props and return the item in the Product Component */}
            </div>
          </div>
        </div>
      )
 }
};
export default Products;