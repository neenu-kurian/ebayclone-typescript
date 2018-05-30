import React, {PureComponent} from 'react'

export default class AddProduct extends PureComponent{
    constructor(){
        super()
        this.state={}
    }

     handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
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
            <input name="Product" id="Product" value={
                this.state.name||''
            }onChange={this.handleChange} />
        </div>
        <div>
            <label htmlFor="Description">Description</label>
            <input name="Description" id="Description" value={
                this.state.name||""
            }onChange={this.handleChange} />
        </div>
        <div>
            <label htmlFor="Picture">Picture</label>
            <input name="Picture" id="Picture" value={
                this.state.name||""
            }onChange={this.handleChange} />
        </div>
        <div>
            <label htmlFor="Price">Price</label>
            <input name="Price" id="Price" value={
                this.state.name||""
            }onChange={this.handleChange} />
        </div>
        <div>
            <label htmlFor="Emailaddress">Email Address</label>
            <input name="Emailaddress" id="Emailaddress" value={
                this.state.name||""
            }onChange={this.handleChange} />
        </div>
        <div>
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input name="PhoneNumber" id="PhoneNumber" value={
                this.state.name||""
            }onChange={this.handleChange} />
        </div>
       <br />
       
       <button type="submit">Save</button>
        </div>
        </form>
    )
}

}