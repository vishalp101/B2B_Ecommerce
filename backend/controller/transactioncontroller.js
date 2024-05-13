const transactionschema = require("../model/transactionmodel");

exports.createtransaction = (req,res) => {
  const transaction = new transactionschema(req.body);
  transaction.save().then((data)=>{
      if(!data)
      {
          res.json({
              message: "Something went wrong while saving the transaction",
              status: 400,
              error: err,
            });
      }
      else
      {
          res.json({
              message: "Transaction saved successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while saving the transaction",
          status: 400,
          error: err,
        });
  })

}


exports.getAllTransaction = (req,res) => {
  transactionschema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving Transaction",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "Transaction Saved Successfully",
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



exports.getTranactionById = (req, res) => {
  transactionschema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the transaction",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Transaction fetched successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Transaction",
        status: 400,
        error: err,
      });
    });
};


exports.updateTransactionById = (req, res) => {
  transactionschema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Transaction",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Transaction updated successfully",
            status: 200,
            data: data,
          });
        }
      });
  };


  exports.deleteTransactionById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    transactionschema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the transaction",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Transaction deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Delete the transaction",
        status: 400,
        error: err,
      });
    })
  }



  /*exports.deleteAllTransaction = (req,res) => {
    transactionschema.deleteMany()
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the All Transaction",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "All Transaction deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the All Transaction",
            status: 400,
            error: err,
      })
    })
  }*/