express=require("express")
products = require("../model/products_db.js")

app=express()
var Product = express.Router()
Product.use(express.json());

Product.post("/addProducts",(req,res)=>{
    var user = {
        product_name: req.body.product_name,
        image: req.body.image
    }
    products.inserting(user)
    .then((result) => {
        products.attributeInsert({
            attribute_name: req.body.attribute_name,
            productId:req.body.productId
        })
        .then((data) => {
            console.log(data);
        })
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    })
})

Product.put("/update",(req,res)=>{
    var name=req.body.product_name
    var id=req.body.id
    
    products.update(name, id)
    .then((data)=>{
        res.json(data)
    })
})

Product.get("/get",(req,res)=>{
    var data=products.selectProducts()
    data.then((data)=>{
        res.send(data)
    })
})

module.exports=Product

