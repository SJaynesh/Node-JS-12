const express = require('express');
const multer = require('multer');
const { addProduct, viewAllProducts, updateProduct, deleteProduct } = require('../controllers/product.controller');

const { storage } = require("../middleware/storage")

const route = express.Router();


const upload = multer({ storage });

route.post('/addProduct', upload.single('image'), addProduct);
route.get('/viewProducts', viewAllProducts);
route.patch('/updateProduct/:productId', updateProduct);
route.delete('/deleteProduct', deleteProduct);

module.exports = route;