const Mongoose=require('mongoose');

const customSchema=Mongoose.Schema({
    author:{type:String},   
        quote:{type:String}
})

const Schema=Mongoose.model("Schema",customSchema);

module.exports=Schema;