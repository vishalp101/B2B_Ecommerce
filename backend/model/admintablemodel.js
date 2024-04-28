const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const admintableschema = new  Schema({

    Adminname:{
        type : String,
        required : true,
        //trim : true,
    },
    Adminemail:{
        type : String,
        required : true,
        unique: true,
        //trim : true,
    },
    Adminaddress:{
        type : String,
        required : true,
        //trim : true,
    },
    Adminpassword:{
        type :String,
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

module.exports = mongoose.model('admintable',admintableschema)