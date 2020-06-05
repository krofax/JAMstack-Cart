import Products from '../components/Products.js'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
const Index = (props) => (
  <div>
    <Products products={props.products} />
    <Layout />
  </div>
  
)

// Fetch our products data via the API endpoint
export default Index