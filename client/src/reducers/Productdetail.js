import {VIEW_PRODUCT_DETAILS} from '../actions/types'


const initialState=[{id:1, title:"bag", description: 'a red bag',picture:" ",price:20,email:'zsd@gamil.com',phoneno:3234234}]

export default function (state = initialState, action) {
   
    switch (action.type) {
      
      case VIEW_PRODUCT_DETAILS:  
      return action.payload  
      default:
        return state
    }
  }