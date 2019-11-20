express=require("express")
app=express()

product=require("./routs/product_rout")

app.use("/routs/product_rout",product)

app.listen(5000,()=>{
    console.log("server will listen 5000 port..")
})