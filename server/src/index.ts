import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import PageController from "./pages/controller"
import setupDb from './db'


const port = process.env.PORT || 4000

const app = createKoaServer({
   cors:true,
   controllers: [PageController]
})

setupDb()
  .then(_ =>
    app.listen(port , () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))