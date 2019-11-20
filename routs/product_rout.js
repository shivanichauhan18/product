express=require("express")
product=require("../model/product_db.js")

app=express()

var Product=express.Router()
Product.use(express.json());

Product.post("/addProduct",(req,res)=>{
    var user={
        "name":req.body.name,
        "image":req.body.image,
        "attribute":req.body.attribute
    }
    var addProduct=inserting(user)
    addProduct.then((result)=>{
        res.json(result)
    })

})


module.exports=