import React, { Component } from 'react';
import './App.css';
import ProductDetails from './components/ProductDetails'
import ProductList from './components/ProductList'
import { BrowserRouter as Router, Route,Redirect} from "react-router-dom"
import AddProduct from './components/AddProduct';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <img className='ebay'  alt='ebayimage'src='https://sendgrid.com/wp-content/uploads/2017/05/2000px-EBay_logo.svg.png' />
      <br/>
      <p className='enjoy-shopping'> Enjoy Shopping !!!! </p>
      <Router>
        <div>
        <Route exact path="/products" component={ProductList} />
        
        <br />
        
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route exact path="/newproduct" component={AddProduct}/>
        <Route exact path="/" render={ () => <Redirect to="/products" /> } /> 
      </div>
    </Router>
    </div>
    );
  }
}

export default App;

