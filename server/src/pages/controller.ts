import { JsonController, Get, Param,Post,HttpCode,Body,NotFoundError,Put } from 'routing-controllers'
import Product from './entity'


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


    @Post('/newproduct')
    @HttpCode(201)
    async createProduct(@Body()product : Product) {
    const entity = await product.save()
    return entity

    }
}

