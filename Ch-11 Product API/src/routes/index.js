const express = require('express');
const { addProduct, viewAllProducts, updateProduct, deleteProduct } = require('../controllers/product.controller');

const route = express.Router();

route.post('/addProduct', addProduct);
route.get('/viewProducts', viewAllProducts);
route.patch('/updateProduct', updateProduct);
route.delete('/deleteProduct', deleteProduct);

module.exports = route;