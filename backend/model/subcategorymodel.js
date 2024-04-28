const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const subcategoryschema = new  Schema({

    SubCategoryname:{
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

module.exports = mongoose.model('subcategory',subcategoryschema)