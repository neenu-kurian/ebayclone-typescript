import * as request from 'superagent'
import {VIEW_PRODUCT_LIST} from './types'
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


