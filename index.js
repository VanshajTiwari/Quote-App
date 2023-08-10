const Express=require('express');
const App=Express();
const cors=require('cors');
const Database=require('./DB');
const Routes=require("./routes/routes");
App.use(Express.json());
App.use(Express.Router());
App.use(Express.static("./public"));
App.use("/",Routes);
App.listen("8005",()=>{console.log("Server OK!!")})