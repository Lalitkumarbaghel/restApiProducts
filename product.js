const productModal = require('./modals/products')
const productJson = require('./product.json')
const dbconnect = require('./db/connect')
require('dotenv').config();

dbconnect();

console.log(productJson)


const start = async()=>{
    await productModal.deleteMany();
    await productModal.create(productJson)
    console.log('upload')
}
start();