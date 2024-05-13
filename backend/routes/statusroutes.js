const express = require('express');
const router = express.Router()

const statuscontroller =require("../controller/statuscontroller");

router.post('/status',statuscontroller.addstatus)
router.get("/status",statuscontroller.getallstatus)
router.post("/status/:id",statuscontroller.getStatusById);
router.post("/status/:id",statuscontroller.updateStatusById);
router.delete("/status/:id",statuscontroller.deleteStatusById);

module.exports = router