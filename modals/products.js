const mongoose = require('mongoose');
const productScma = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.3
    },
    company:{
        type:String,
             
    }
}, {timestamps:true})

module.exports = new mongoose.model("Product", productScma)