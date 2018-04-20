import {VIEW_PRODUCT_DETAILS} from './types'
import * as request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const fetchProduct=(productID)=>(dispatch)=>{
    console.log("inside fetchdetails")
    request
    .get(`${baseUrl}/products/${productID}`)
    .then(response=>{
        console.log("inside fetch pdt details")
        console.log(response.body)
        dispatch({
       
        type:VIEW_PRODUCT_DETAILS,
        payload:response.body
    })})
    .catch(err=>alert(err))
}