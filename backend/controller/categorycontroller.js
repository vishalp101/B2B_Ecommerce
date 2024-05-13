const categoryschema = require("../model/categorymodel");

exports.addcategory = (req,res) => {
  const category = new categoryschema(req.body);
  category.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Category",
              ststus: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Category add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Category",
          status: 400,
          error: err,
        });
  })
}


exports.getAllCategory = (req,res) => {
    categoryschema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the Category",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Category saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the Category",
            status: 400,
            error: err,
          });
    })
}


exports.getCategoryById = (req, res) => {
  categoryschema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Category",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Category fetched By Id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Category",
        status: 400,
        error: err,
      });
    });
};



exports.updateCategoryById = (req, res) => {
    categoryschema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Category",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Category updated successfully",
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


  exports.deleteCategoryById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    categoryschema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the Category",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Category deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete Category",
        status: 400,
        error: err,
      });
    })
  }


  /*exports.deleteAllCategory = (req,res) => {
    categoryschema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All Category",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Category deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All Category",
            status: 400,
            error: err,
      })
    })
  }*/