const express = require('express');
const router = express.Router()
const subcategorycontroller = require("../controller/subcategorycontroller");

const validate = require('../middleware/zodmiddleware');
const subCategoryValidation = require('../utils/subcategoryvalidation');


router.post('/subcategory',subcategorycontroller.addsubcategory)
router.get("/subcategory",subcategorycontroller.getAllSubcategory)
router.post("/subcategory/:id",subcategorycontroller.getSubcategoryById);
router.post("/subcategory/:id",subcategorycontroller.updateSubcategoryById);
router.delete("/subcategory/:id",subcategorycontroller.deleteSubcategoryById);
//router.delete("/subcategory",subcategorycontroller.deleteAllSubcategory);

module.exports = router