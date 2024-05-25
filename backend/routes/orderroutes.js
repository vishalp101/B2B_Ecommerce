const express = require('express');
const router = express.Router()

const ordercontroller =  require("../controller/ordercontroller");

const validate = require("../middleware/zodmiddleware");
const ordervalidation = require("../utils/ordervalidation");

router.post(
    "/order",
    validate(ordervalidation),
    ordercontroller.addorder
);

router.post('/order',ordercontroller.addorder)
router.get("/order",ordercontroller.getAllorder)
router.post("/order/:id",ordercontroller.getOrderById);
router.post("/order/:id",ordercontroller.updateOrderById);
router.delete("/order/:id",ordercontroller.deleteOrderById);
//router.delete("/order",ordercontroller.deleteAllOrder);

module.exports = router