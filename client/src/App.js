import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductDetails from './components/ProductDetails'
import ProductList from './components/ProductList'
import { BrowserRouter as Router, Route,Redirect} from "react-router-dom"


let product=[
  {id:1,
  title:'mug',
  description:'red mug',
  picture:'https://i.pinimg.com/originals/85/20/11/852011aaf5441e55dc542b25692ff679.jpg',
  price:25,
  email:'xyz@gmail.com',
  phoneno:44632832
  },
  {id:2,
    title:'dog',
    description:'german shepherd',
    picture:'http://www.insidedogsworld.com/wp-content/uploads/2017/07/German-Shepherd-Standard-Coat-GSC-1000x575-1-1-1-1.jpg',
    price:250,
    email:'abc@gmail.com',
    phoneno:4474384573
  },

]
class App extends Component {
  render() {
    return (
      <div>
        <img style={{maxHeight:'300px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/EBay_former_logo.svg/2000px-EBay_former_logo.svg.png' />
        
      <Router>
        <div>
        <Route exact path="/products" component={ProductList} />
        
        <br />
        
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route exact path="/" render={ () => <Redirect to="/products" /> } /> 
      </div>
    </Router>
    </div>
    );
  }
}

export default App;

