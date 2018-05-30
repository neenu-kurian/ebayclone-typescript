import React, { Component } from 'react';
import './App.css';
import ProductDetails from './components/ProductDetails'
import ProductList from './components/ProductList'
import { BrowserRouter as Router, Route,Redirect} from "react-router-dom"


class App extends Component {
  render() {
    return (
      <div>
        <img style={{maxHeight:'300px'}} alt='ṕroductimage'src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/EBay_former_logo.svg/2000px-EBay_former_logo.svg.png' />
       
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

