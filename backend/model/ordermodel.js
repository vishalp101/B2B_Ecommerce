const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const orderSchema = new  Schema({
    orderdate:{
        type: Number,
        // required: true,
    },
    orderstatus:{
        type: Number,
        // required: true,
    },
    paymentmethod:{
        type: String,
        // required: true,
    },
    shippingmethod:{
        type: String,
        // required: true,
    },
    totalamount:{
        type: Number,
        // required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
},
{
    timeStamps : true
}
)

module.exports = mongoose.model('Order',orderSchema)
