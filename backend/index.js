const express = require("express"); // creating the server
const app = express();
app.use(express.json()); // middleware
app.use(express.urlencoded({ extended: true })); // middleware

const mongoose = require("mongoose"); // connecting to database

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
