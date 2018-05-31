import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../actions/ProductDetail'
import {Link} from 'react-router-dom'

import '../css/ProductDetails.css'
import Button from 'material-ui/Button'
import {Table,TableHeader,TableHeaderColumn,TableRow,TableRowColumn,TableBody} from 'material-ui/Table';


class ProductDetails extends PureComponent{

   

     render(){

        return(
          
           <div>
           <h1 className='product-details-text'>Product Details</h1>
            
         {/*}  <Table>
               
            <TableHeader>
              <TableRow>
                  
                  <TableHeaderColumn>Description</TableHeaderColumn>
                  <TableHeaderColumn>Image</TableHeaderColumn>
                  <TableHeaderColumn>Price</TableHeaderColumn>
                  <TableHeaderColumn>Email</TableHeaderColumn>
                  <TableHeaderColumn>Phone Number </TableHeaderColumn>
             </TableRow>
             
            </TableHeader>
                <TableBody>
                 <TableRow key={this.props.product.id} >
                  <TableRowColumn>{this.props.product.description}</TableRowColumn>
                  <TableRowColumn><img className='image-product' alt='product' src={this.props.product.picture}/></TableRowColumn>
                  <TableRowColumn>{this.props.product.price}</TableRowColumn>
                  <TableRowColumn>{this.props.product.email}</TableRowColumn>
                  <TableRowColumn>{this.props.product.phoneno}</TableRowColumn>
                 </TableRow>
                 
                </TableBody>
        </Table>*/}

        

        <Link to ={`/products`}><Button className='seeallproducts'> See all products </Button></Link>
        </div>
          
       
        )
    }
}

const mapStateToProps = function (state) {

   return {
      product: state.Productdetail
    }
  }

export default connect(mapStateToProps,{fetchProduct})(ProductDetails)