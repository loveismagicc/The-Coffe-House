const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// GET all products
router.get('/', productController.getAllProducts);

// GET product by ID
router.get('/:id', productController.getProductById);

// SEARCH products by name
router.get('/search/name', productController.searchProducts);

// CREATE product
router.post('/', productController.createProduct);

// UPDATE product
router.put('/:id', productController.updateProduct);

// DELETE product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
