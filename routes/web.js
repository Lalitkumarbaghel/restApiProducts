const express = require('express')
const router = express.Router();
const {getproducts, productsControllersTesing} = require('../app/controllers/products')
router.route('/').get(getproducts)
router.route('/testing').get(productsControllersTesing)

module.exports = router;