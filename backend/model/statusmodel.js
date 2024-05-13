const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const statusschema = new  Schema({
    status:{
        type: String,
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

module.exports = mongoose.model('status',statusschema)
