const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const feedbackschema = new  Schema({

    Ratings:{
        type : Number,
        required : true,
        //trim : true,
    },
    Comments:{
        type : String,
        required : true,
        
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

module.exports = mongoose.model('feedback',feedbackschema)