const feedbackschema = require("../model/feedbackmodel");

exports.Addfeedback = (req,res) => {
  const feedback = new feedbackschema(req.body);
  feedback.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Feedback",
              ststus: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Feedback add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Feedback",
          status: 400,
          error: err,
        });
  })
}


exports.getAllFeedback = (req,res) => {
  feedbackschema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the Feedback",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Feedback saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the Feedback",
            status: 400,
            error: err,
          });
    })
}


exports.getFeedbackById = (req, res) => {
  feedbackschema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Feedback",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Feedback fetched By Id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the feedback",
        status: 400,
        error: err,
      });
    });
};



exports.updateFeedbackById = (req, res) => {
  feedbackschema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the feedback",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Feedback updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Feedback",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteFeedbackById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    feedbackschema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the Feedback",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Feedback deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete Feedback",
        status: 400,
        error: err,
      });
    })
  }

  exports.deleteAllFeedback = (req,res) => {
    feedbackschema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All Feedback",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Feedback deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All Feedback",
            status: 400,
            error: err,
      })
    })
  }