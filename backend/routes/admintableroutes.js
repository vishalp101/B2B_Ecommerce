const express = require('express');
const router = express.Router()
const admintablecontroller = require("../controller/admintablecontroller");

const validate = require('../middleware/zodmiddleware');
const adminValidation = require('../utils/admintablevalidation');


router.post('/admintable',admintablecontroller.addadmintable)
router.get("/admintable",admintablecontroller.getAllAdmintable)
router.post("/admintable/:id",admintablecontroller.getAdmintableById);
router.post("/admintable/:id",admintablecontroller.updateAdmintableById);
router.delete("/admintable/:id",admintablecontroller.deleteAdmintableById);
//router.delete("/admintable",admintablecontroller.deleteAllAdmintable);

module.exports = router