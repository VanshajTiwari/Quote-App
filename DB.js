const Mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:"./config.env"});
const DB=process.env.DATABASE;
const Database=Mongoose.connect(DB,{useNewUrlParser:true,family:4}).then(res=>console.log("DB connected")).catch(err=>console.log(err.message));

module.exports=Database;