import * as request from 'superagent'
import {VIEW_PRODUCT_LIST, NEW_PRODUCT} from './types'
const baseUrl = 'http://localhost:4000'

export const fetchAllProducts=()=>(dispatch)=>{
    request
    .get(`${baseUrl}/products`)
    .then(response=>{
        
        dispatch({
        type:VIEW_PRODUCT_LIST,
        payload:response.body.products
    })})
    .catch(err=>alert(err))
}


export const createProduct =(productstate)=> (dispatch)  => {
   
    request
        .post(`${baseUrl}/newproduct`)
        .send(productstate)
        .then(result => dispatch(createNewProduct(productstate)))
        .catch(err => console.error(err))
}

export const createNewProduct = productstate => ({
    type: NEW_PRODUCT,
    payload: productstate
  })
  