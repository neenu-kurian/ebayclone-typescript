import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../actions/ProductDetail'

class ProductDetails extends PureComponent{

    componentWillMount() {
        this.props.fetchProduct(this.props.match.params.id)
      }

     render(){
        const {product}=this.props
        return(
            <div>
            <h1>Product Details</h1>
          <table>
               
            <thead>
              <tr>
                  
                  <th>Description</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Email</th>
                  <th>Phone Number </th>
             </tr>
             <br/>
            </thead>
                <tbody>
                 <tr key={product.id} >
                  <td>{product.description}</td>
                  <td>{product.picture}</td>
                  <td>{product.price}</td>
                  <td>{product.email}</td>
                  <td>{product.phoneno}</td>
                 </tr>
                 
                 </tbody>
        </table>
        </div>
        )
    }
}

const mapStateToProps = function (state,props) {

    
    return {
      product: state.Productdetail
    }
  }

export default connect(mapStateToProps,{fetchProduct})(ProductDetails)