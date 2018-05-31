import React, {PureComponent} from 'react'
import {createProduct} from '../actions/productlist'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import '../css/AddProduct.css'
import Paper from 'material-ui/Paper'

class AddProduct extends PureComponent{
    constructor(){
        super()
        this.state={}
    }

     handleSubmit = (e) => {
       
        console.log(this.state)
		e.preventDefault()
		this.props.createProduct(this.state)
    }
    
    handleChange = (event) => {
      
        const {name, value} = event.target
       
        this.setState({
          [name]: value
         
        })
    }

render(){

    return(
        <form onSubmit={this.handleSubmit}>
        <Paper className='outer-paper-addproduct'>
        <h1 className='add-new'>Add New Product </h1>
        
        <div>
            <label className='addproductlabel' htmlFor="Product">Product Name</label>
            <input className='addproductinput' name="title" id="Product" value={
                this.state.name
            }onChange={this.handleChange} />
        </div>
        <div>
            <label className='addproductlabel' htmlFor="Description">Description</label>
            <input className='addproductinput' name="description" id="Description" value={
                this.state.name
            }onChange={this.handleChange} />
        </div>
        <div>
            <label className='addproductlabel' htmlFor="Picture">Picture</label>
            <input className='addproductinput' name="picture" id="Picture" value={
                this.state.name
            }onChange={this.handleChange} />
        </div>
        <div>
            <label className='addproductlabel' htmlFor="Price">Price</label>
            <input className='addproductinput' name="price" id="Price" value={
                this.state.name
            }onChange={this.handleChange} />
        </div>
        <div>
            <label className='addproductlabel' htmlFor="Emailaddress">Email Address</label>
            <input className='addproductinput' name="email" id="Emailaddress" value={
                this.state.name
            }onChange={this.handleChange} />
        </div>
        <div>
            <label className='addproductlabel' htmlFor="PhoneNumber">Phone Number</label>
            <input className='addproductinput' name="phoneno" id="PhoneNumber" value={
                this.state.name
            }onChange={this.handleChange} />
        </div>
       <br />
       
       <button type="submit" className='save-button'>Save</button><br/><br/>
       <Link to={`/products`} ><button  className='allproducts-button' >All Products</button></Link>

        </Paper>
        </form>
    )
}

}

export default connect(null,{createProduct})(AddProduct)