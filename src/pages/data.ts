export interface Product {
    id: number,
    title: string,
    description:string,
    picture: string,
    price: number,
    email:string,
    phoneno:number
  }
  
  interface ProductDatabase {
    [id: number]: Product
  }

const productsById:ProductDatabase = {
    1: {
        id: 1,
        title: 'Glass',
        description:' white glass',
        picture:'abc',
        price:20,
        email:'abc@gmail.com',
        phoneno:2343
    },
    2: {
        id: 2,
        title: 'Flower',
        description:' red roses',
        picture:'efg',
        price:100,
        email:'xyz@gmail.com',
        phoneno:234332  
    }
    
  }
  
  export default productsById