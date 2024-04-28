const productSchema = require("../model/productModel");


exports.createProduct = (req,res) => {
    const product = new productSchema(req.body);
    product.save()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the product",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Product saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the product",
            status: 400,
            error: err,
          });
    })

}


exports.getAllProducts = (req,res) => {
    productSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while getting all the product",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Product saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the product",
            status: 400,
            error: err,
          });
    })
}


exports.getproductById = (req, res) => {
  productSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the product by ID",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Product fetched successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the product",
        status: 400,
        error: err,
      });
    });
};


exports.updateProduct = (req, res) => {
    productSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the product",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Product updated successfully",
            status: 200,
            data: data,
          });
        }
      });
  };

  exports.deleteproduct = (req, res) => {
    const id = req.params.id;
    console.log(id);
    productSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the product",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Product deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete product",
        status: 400,
        error: err,
      });
    })
  }

  exports.deleteAllProduct = (req,res) => {
    productSchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All product",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Product deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All product",
            status: 400,
            error: err,
      })
    })
  }