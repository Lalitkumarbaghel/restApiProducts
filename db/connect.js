const mongoose = require('mongoose');
require('dotenv').config();
const MongoUrl = process.env.MONGOURL;
const mongoConnect = mongoose.connect(MongoUrl);
const connectDB = ()=>{
mongoConnect
.then(()=>{
    console.log("Mongoose are connection successfully")
})
.catch((err)=>{
    console.log(err)
})

}
module.exports = connectDB;


