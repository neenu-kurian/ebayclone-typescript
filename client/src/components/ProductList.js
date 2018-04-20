import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../actions/productlist'
import './ProductList.css'



class ProductList extends PureComponent{
   
    componentWillMount() {
        this.props.fetchAllProducts()
        
      }
    
 
    render(){
      
      const { productList } = this.props
      console.log(productList)
      return(
          <div>
          <h1>Product List</h1>
          <table>
          <thead>
              <tr>
                  
                  <th className="headerid">#</th>
                  <th className="headertitle">Name</th>
                  <th className="headerprice">Price</th>
                </tr>
          </thead>
          <tbody>
                {productList.map(product =>(<tr key={product.id} >
                  <td className="productid">{product.id}</td>
                  <td className="producttitle">{product.title}</td>
                  <td className="productprice">{product.price}</td>
                  </tr>))
                 
                } 
          </tbody>
          </table>
          <br/><br />
          
        </div>
      )
    }
}

const mapstatetoprops=function(state){
    console.log("iniside mapstatetoprops")
    return{
        productList: state.productlistreducer
       
    }
    
}

export default connect(mapstatetoprops,{fetchAllProducts})(ProductList)