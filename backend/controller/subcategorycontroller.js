const subcategoryschema = require("../model/subcategorymodel");

exports.addsubcategory = (req,res) => {
  const subcategory = new subcategoryschema(req.body);
  subcategory.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Sub Category",
              ststus: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Sub Category add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Sub Category",
          status: 400,
          error: err,
        });
  })
}


exports.getAllSubcategory = (req,res) => {
    subcategoryschema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the Sub Category",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Sub Category saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the Sub Category",
            status: 400,
            error: err,
          });
    })
}


exports.getSubcategoryById = (req, res) => {
  subcategoryschema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Sub Category",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Sub Category fetched By Id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Sub Category",
        status: 400,
        error: err,
      });
    });
};



exports.updateSubcategoryById = (req, res) => {
    subcategoryschema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Sub Category",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Sub Category updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Sub Category",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteSubcategoryById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    subcategoryschema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the Sub Category",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Sub Category deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete Sub Category",
        status: 400,
        error: err,
      });
    })
  }


  exports.deleteAllSubcategory = (req,res) => {
    subcategoryschema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All Sub Category",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Sub Category deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All Sub category",
            status: 400,
            error: err,
      })
    })
  }