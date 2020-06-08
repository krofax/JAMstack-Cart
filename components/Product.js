import React, {useContext} from "react"
import CartContext from '../components/contextCart';

const Product = ({ product }) => {
  const { addToCart, total } = useContext(CartContext);
 return (
      <div className="col-sm-4">
          <div className="card" style={{width: "18rem"}}>
            <img src={product.fields.image.url} className="card-img-top" alt="shirt"/>
            
            <div className="card-body">
         <h5 className="card-title"> {product.fields.name}</h5>
         <h6 className="card-title">$ {product.fields.price}</h6>
         {/* Link to product id */}
         {/* <Link href="/products/[id]" as={`/products/${product.fields.id}`}>
           <a>View Item &rarr;</a>
         </Link> */}
         <button className="btn btn-large btn-primary" onClick={() => { addToCart(product); total(product.price); }}>Add To Cart</button>
            </div>
          </div>
      </div>
 );
}
export default Product;