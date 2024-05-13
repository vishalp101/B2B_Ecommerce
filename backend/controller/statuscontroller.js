const statusschema = require("../model/statusmodel");

exports.addstatus = (req,res) => {
  const status = new statusschema(req.body);
  status.save().then((data)=>{
      if(!data)
      {
          res.json({
              message: "Something went wrong while saving the status",
              status: 400,
              error: err,
            });
      }
      else
      {
          res.json({
              message: "Status saved successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while saving the status",
          status: 400,
          error: err,
        });
  })

}


exports.getallstatus = (req,res) => {
  statusschema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving status",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "Status Saved Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving status",
                status: 400,
                error: err,
        });
    })
}



exports.getStatusById = (req, res) => {
  statusschema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the status",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Status fetched successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Status",
        status: 400,
        error: err,
      });
    });
};


exports.updateStatusById = (req, res) => {
  statusschema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Status",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Status updated successfully",
            status: 200,
            data: data,
          });
        }
      });
  };


  exports.deleteStatusById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    statusschema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the Status",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Status deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Delete the Status",
        status: 400,
        error: err,
      });
    })
  }