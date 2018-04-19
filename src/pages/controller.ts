import { JsonController, Get, Param,Post,HttpCode,Body,NotFoundError,Put } from 'routing-controllers'
import Product from './entity'

type ProductsList = { products: Product[] }
@JsonController()
export default class ProductController {
   
    @Get('/products/:id')
    getProduct(
        @Param('id') id: number
    ){
        return Product.findOne(id)
    }

    @Get('/products')
    async allProducst() {
        const products = await Product.find()
        return { products }
      }
   
    @Put('/products/:id')
    async updateProduct(
    @Param('id') id: number,
    @Body() update: Partial<Product>
   )  {
    const product = await Product.findOne(id)
    if (!product) throw new NotFoundError('Cannot find product')

    return Product.merge(product, update).save()
    }

   @Post('/products')
   @HttpCode(201)
   createProduct(
   @Body() product: Product
   ) {
  return product.save()
  }
    
}

