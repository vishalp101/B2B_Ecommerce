const express = require('express');
const router = express.Router()
const productController = require("../controller/productController");

router.post('/product',productController.createProduct)
router.get("/product",productController.getAllProducts)
router.post("/product/:id",productController.getAllProducts);
router.post("/product/:id",productController.updateProduct);
router.delete("/product/:id",productController.deleteproduct);
router.delete("/product",productController.deleteAllProduct);

module.exports = router