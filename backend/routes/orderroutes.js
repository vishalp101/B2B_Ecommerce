const express = require('express');
const router = express.Router()

const ordercontroller =  require("../controller/ordercontroller");

router.post('/order',ordercontroller.addorder)
router.get("/order",ordercontroller.getAllorder)
router.post("/order/:id",ordercontroller.getOrderById);
router.post("/order/:id",ordercontroller.updateOrderById);
router.delete("/order/:id",ordercontroller.deleteOrderById);
router.delete("/order",ordercontroller.deleteAllOrder);

module.exports = router