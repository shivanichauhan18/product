var Knex=require("./connection")


var inserting=((data)=>{
    return Knex("product").insert(data)
})

var updating=((data)=>{
    
})
