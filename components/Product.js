
import Link from "next/link";

const Product = (props) => {
 return (
      <div className="col-sm-4">
          <div className="card" style={{width: "18rem"}}>
            <img src="" className="card-img-top" alt="shirt"/>
            {/* include product image via props */}
            <div className="card-body">
         <h5 className="card-title">{/* include product name via props*/}</h5>
         <h6 className="card-title">$ {/* include product price via props */}</h6>
         {/* Link to product id */}
              <Link href="/products/[id]" as={`/products/`}>
                  <a>View Item &rarr;</a>
              </Link>
            </div>
          </div>
      </div>
 );
}
export default Product;