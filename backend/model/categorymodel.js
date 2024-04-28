const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const categoryschema = new  Schema({

    Categoryname:{
        type : String,
        required : true,
        //trim : true,
    },
    createdAt:{
        type : Date,
        default : Date.now,
    },
    updatedAt:{
        type : Date,
        default : Date.now,
    }
},
{
    timeStamps : true,
}
)

module.exports = mongoose.model('category',categoryschema)