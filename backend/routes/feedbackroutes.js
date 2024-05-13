const express = require('express');
const router = express.Router()

const feedbackcontroller =require("../controller/feedbackcontroller");

router.post("/feedback",feedbackcontroller.Addfeedback)
router.get("/feedback",feedbackcontroller.getAllFeedback)
router.post("/feedback/:id",feedbackcontroller.getFeedbackById);
router.post("/feedback/:id",feedbackcontroller.updateFeedbackById);
router.delete("/feedback/:id",feedbackcontroller.deleteFeedbackById);
//router.delete("/feedback",feedbackcontroller.deleteAllFeedback);

module.exports = router
