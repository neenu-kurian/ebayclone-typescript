import {VIEW_PRODUCT_LIST} from '../actions/types'

const initialState=[
    {id:1, title:"bag", description: 'a red bag',picture:" ",price:20,email:'zsd@gamil.com',phoneno:3234234},
    {id:2,title:"book",description:'a white book',picture:"",price:30,email:'ff@gmail.com',phoneno:842353}
]

export default function (state = initialState, action) {
    switch (action.type) {
        case VIEW_PRODUCT_LIST:
           return action.payload
        default:
        return state
    }
  }