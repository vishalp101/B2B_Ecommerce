const customerSchema = require("../model/customermodel");

exports.addcustomer = (req,res) => {
  const customer = new customerSchema(req.body);
  customer.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the customer",
              ststus: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Customer add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the customer",
          status: 400,
          error: err,
        });
  })
}


exports.getAllcustomer = (req,res) => {
    customerSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the customer",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Customer saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the customer",
            status: 400,
            error: err,
          });
    })
}


exports.getCustomerById = (req, res) => {
  customerSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Customer",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Customer fetched By Id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Customer",
        status: 400,
        error: err,
      });
    });
};



exports.updateCustomerById = (req, res) => {
    customerSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Customer",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Customer updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Customer",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteCustomerById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    customerSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the Customer",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Customer deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete Customer",
        status: 400,
        error: err,
      });
    })
  }

  exports.deleteAllCustomer = (req,res) => {
    customerSchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All Customer",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Customer deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All Customer",
            status: 400,
            error: err,
      })
    })
  }