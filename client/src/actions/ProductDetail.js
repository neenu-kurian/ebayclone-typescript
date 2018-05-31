import {VIEW_PRODUCT_DETAILS} from './types'
import {NEW_PRODUCT} from './types'
import * as request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const fetchProduct=(productID)=>(dispatch)=>{
  request
    .get(`${baseUrl}/products/${productID}`)
    .then(response=>{
        dispatch({
       
        type:VIEW_PRODUCT_DETAILS,
        payload:response.body
    })})
    .catch(err=>alert(err))
}

