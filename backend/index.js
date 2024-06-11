const express = require("express"); // creating the server
const app = express();
//const multer = require('multer')
//const upload = multer({ dest: 'uploads/' })
app.use(express.json()); // middleware
app.use(express.urlencoded({ extended: true })); // middleware
//app.use('/api', require('./routes/upload'));

const mongoose = require("mongoose"); // connecting to database

const multer  = require('multer');
//const upload = multer();
const upload = multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb)
    {
      cb(null,"Uploads")
    },
    filename: function(req,file,cb)
    {
      cb(null,file.filename+"-"+Date.now()+".png")
    }
  })

}).single("user_file");

app.post("/upload",upload,(req,res) =>{
  res.send("file upload")
});



mongoose
  .connect("mongodb://127.0.0.1:27017/B2B_Ecommerce")
  .then((sucess) => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, (err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port=>" + 3000);
  }
}); //where my services will called()



const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

const customerRoutes = require("./routes/customerroutes");
app.use("/customers", customerRoutes);

const orderRoutes = require("./routes/orderroutes");
app.use("/orders", orderRoutes);

const transactionRoutes = require("./routes/transactionroutes");
app.use("/transactions", transactionRoutes);

const feedbackroutes = require("./routes/feedbackroutes");
app.use("/feedbacks",feedbackroutes);

const admintableroutes = require("./routes/admintableroutes");
app.use("/admintable",admintableroutes);

const categoryroutes = require("./routes/categoryroutes");
app.use("/category",categoryroutes);

const subcategoryroutes = require("./routes/subcategoryroutes");
app.use("/subcategory",subcategoryroutes);

const statusroutes = require("./routes/statusroutes");
app.use("/status",statusroutes);


//app.use('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
 // req.avatar = 'avatar';
  // req.body will hold the text fields, if there were any
//})



/*app.post('/upload', upload.single('file'), (req, res, next) => {
  try {
    if(!req.file) {
      const error = new Error('Please upload a file');
      error.httpStatusCode = 400;
      return next(error);
    }
    res.send(req.file);
  } catch (error) {
    res.send(400, 'Upload failed');
  }
});*/