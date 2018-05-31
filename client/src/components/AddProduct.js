import React, {PureComponent} from 'react'
import {createProduct} from '../actions/productlist'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

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
        <div>
        <h1>Add new Product </h1>
        
        <div>
            <label htmlFor="Product">Product Name</label>
            <input name="title" id="Product" value={
                this.state.name
            }onChange={this.handleChange} />
        </div>
        <div>
            <label htmlFor="Description">Description</label>
            <input name="description" id="Description" value={
                this.state.name
            }onChange={this.handleChange} />
        </div>
        <div>
            <label htmlFor="Picture">Picture</label>
            <input name="picture" id="Picture" value={
                this.state.name
            }onChange={this.handleChange} />
        </div>
        <div>
            <label htmlFor="Price">Price</label>
            <input name="price" id="Price" value={
                this.state.name
            }onChange={this.handleChange} />
        </div>
        <div>
            <label htmlFor="Emailaddress">Email Address</label>
            <input name="email" id="Emailaddress" value={
                this.state.name
            }onChange={this.handleChange} />
        </div>
        <div>
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input name="phoneno" id="PhoneNumber" value={
                this.state.name
            }onChange={this.handleChange} />
        </div>
       <br />
       
       <button type="submit">Save</button><br/>
       <Link to={`/products`} ><button >All Products</button></Link>

        </div>
        </form>
    )
}

}

export default connect(null,{createProduct})(AddProduct)