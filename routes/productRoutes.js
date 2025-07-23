const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct } = require('../controllers/productController');
const authMiddleware = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');

router.get('/', getProducts);
router.get('/:id', getProductById);

router.post('/', authMiddleware, adminMiddleware, createProduct);

module.exports = router;
