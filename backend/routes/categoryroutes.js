const express = require('express');
const router = express.Router()
const categorycontroller = require("../controller/categorycontroller");

const categoryValidation = require("../utils/categoryvalidation");
const validate = require("../middleware/zodmiddleware");


router.post('/category',categorycontroller.addcategory)
router.get("/category",categorycontroller.getAllCategory)
router.post("/category/:id",categorycontroller.getCategoryById);
router.post("/category/:id",categorycontroller.updateCategoryById);
router.delete("/category/:id",categorycontroller.deleteCategoryById);
//router.delete("/category",categorycontroller.deleteAllCategory);

module.exports = router