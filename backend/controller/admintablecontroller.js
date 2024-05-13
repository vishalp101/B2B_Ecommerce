const admintableschema = require("../model/admintablemodel");

exports.addadmintable = (req,res) => {
  const admintable = new admintableschema(req.body);
  admintable.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the admin",
              ststus: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "admin add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the admin",
          status: 400,
          error: err,
        });
  })
}


exports.getAllAdmintable = (req,res) => {
    admintableschema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the admin",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "admin saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the admin",
            status: 400,
            error: err,
          });
    })
}


exports.getAdmintableById = (req, res) => {
  admintableschema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the admin",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "admin fetched By Id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the admin",
        status: 400,
        error: err,
      });
    });
};



exports.updateAdmintableById = (req, res) => {
    admintableschema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the admin",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "admin updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the admin",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteAdmintableById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    admintableschema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the admin",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Admin deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete admin",
        status: 400,
        error: err,
      });
    })
  }

  /*exports.deleteAllAdmintable = (req,res) => {
    admintableschema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All Admin",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Admin deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All Admin",
            status: 400,
            error: err,
      })
    })
  } */