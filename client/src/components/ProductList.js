import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../actions/productlist'
import './ProductList.css'



class ProductList extends PureComponent{
   
    componentWillMount() {
        this.props.fetchAllProducts()
        
      }
    
 
    render(){
      
      const productsList = this.props.productList

      console.log("productlist",productsList)

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
                {productsList.map(product =>(<tr key={product.id} >
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
    return{
        productList: state.productList
       
    }
    
}

export default connect(mapstatetoprops,{fetchAllProducts})(ProductList)