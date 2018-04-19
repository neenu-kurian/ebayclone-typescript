import { JsonController, Get, Param,Post,HttpCode,Body } from 'routing-controllers'
import productsById, { Product } from './data'

type ProductsList = { products: Product[] }
@JsonController()
export default class ProductController {
   
    @Get('/products/:id')
    getProduct(
        @Param('id') id: number
    ): Product {
        return productsById[id]
    }

    @Get('/products')
    allProducts(): ProductsList {
        return [productsById]
    }

    
}

}