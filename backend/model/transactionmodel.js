const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const transactionschema = new  Schema({
    payment_status:{
        type: String,
        // required: true,
    },
    transaction_date:{
        type: Number,
        // required: true,
    },
    payment_amount:{
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

module.exports = mongoose.model('transaction', transactionschema);