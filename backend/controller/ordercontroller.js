const orderSchema = require("../model/ordermodel");

exports.addorder = (req,res) => {
  const order = new orderSchema(req.body);
  order.save()
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


exports.getAllorder = (req,res) => {
    orderSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving order",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "Order Saved Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving order",
                status: 400,
                error: err,
        });
    })
}

exports.getOrderById = (req, res) => {
  orderSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the customer",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "order fetched successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the order",
        status: 400,
        error: err,
      });
    });
};

exports.updateOrderById = (req, res) => {
    orderSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the order",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Order updated successfully",
            status: 200,
            data: data,
          });
        }
      });
  };

  exports.deleteOrderById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    orderSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the order",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "orders deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Delete the order",
        status: 400,
        error: err,
      });
    })
  }


  /*exports.deleteAllOrder = (req,res) => {
    orderSchema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All Order",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Order deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All Order",
            status: 400,
            error: err,
      })
    })
  }*/