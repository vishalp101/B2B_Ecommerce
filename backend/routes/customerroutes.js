const express = require('express');
const router = express.Router()

const customercontroller =require("../controller/customercontroller");

router.post('/customer',customercontroller.addcustomer)
router.get("/customer",customercontroller.getAllcustomer)
router.post("/customer/:id",customercontroller.getCustomerById);
router.post("/customer/:id",customercontroller.updateCustomerById);
router.delete("/customer/:id",customercontroller.deleteCustomerById);
router.delete("/customer",customercontroller.deleteAllCustomer);

module.exports = router