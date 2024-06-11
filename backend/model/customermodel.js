const mongoose = require("mongoose"); 
const express = require('express');
//const { string } = require("zod");
const Schema = mongoose.Schema
const customerSchema = new  Schema({

    customerName:{
        type : String,
        required : true,
        //trim : true,
    },
    customerContactNo:{
        type : String,
        //required : true,
        //trim : true,
    },
    customerEmail:{
        type : String,
        //required : true,
        //unique: true,
        //trim : true,
    },
    upload:{
        type :Buffer,
        //require : true,
    },
    customerAddress:{
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
module.exports = mongoose.model('Customer',customerSchema)