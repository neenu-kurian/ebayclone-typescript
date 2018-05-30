import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../actions/productlist'

//Styling
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import './ProductList.css'

class ProductList extends PureComponent {

  componentWillMount() {
    this
      .props
      .fetchAllProducts()

      this.renderProduct=this.renderProduct.bind(this)

  }

  renderProduct(eachproduct)
  {
    return (

      <Card key={eachproduct.id} className="center-card">
        <CardContent>
        <Typography component="h1">
            <img src= {eachproduct.picture} style={{maxHeight: '100px'}} alt='product'/>
          </Typography>
          <Typography component="h1">
            {eachproduct.title}
          </Typography>
          <br/>
          <Typography component="h1">
            Price: {eachproduct.price}
          </Typography>
        </CardContent>

      </Card>
    )

  }

  
  render() {

    const productsList = this.props.productList

    console.log("productlist", productsList)

    return (
      <Paper className="outer-paper">
        {productsList.map((product => 

          this.renderProduct(product)

        ))}
      </Paper>
    )
  }
}

const mapstatetoprops = function (state) {
  return {
    productList: state.productList
  }

}

export default connect(mapstatetoprops, {fetchAllProducts})(ProductList)