const express = require('express');
const router = express.Router()

const transactioncontroller =  require("../controller/transactioncontroller");

router.post("/transaction",transactioncontroller.createtransaction)
router.get("/transaction",transactioncontroller.getAllTransaction)
router.post("/transaction:id",transactioncontroller.getTranactionById);
router.post("/transaction/:id",transactioncontroller.updateTransactionById);
router.delete("/transaction/:id",transactioncontroller.deleteTransactionById);
//router.delete("/transaction",transactioncontroller.deleteAllTransaction);

module.exports = router