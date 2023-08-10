const Schema=require("./../model/authorSchema");

exports.getData=async (req,res)=>{
    const data=await Schema.find({});
    res.status(200).json({status:"Success",data:data});
}
exports.sendData=async (req,res)=>{
    console.log(req.body);
    const data=await Schema.create(req.body)
    res.status(200).json({status:"Success",data:data});
}
exports.getify=async (req,res)=>{
    const {author}=req.params;
    console.log(req.params);
    const data=await Schema.findOne(req.params);
    res.writeHead(200, { 'Content-Type':'text/html'});
    res.end(`<h1>${data.author}</h1><h4>${data.quote}</h4>`
        )
} 