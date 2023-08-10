const Express=require('express');
const Route=Express.Router();
const {getData, sendData,getify}=require('./../controllers/controls');
Route.route('/quotes').get(getData);
Route.route('/send').post(sendData);
Route.route("/brief/:author?").get(getify)
 
module.exports=Route; 