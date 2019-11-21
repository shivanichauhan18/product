var Knex=require("./connection")

var inserting= ((data) =>{
    return Knex("products").insert(data)
})

var attributeInsert = ((data) => {
  return  Knex("attributes").insert(data)
})

var selectProducts=(()=>{
  return Knex.from('products').innerJoin('attributes', 'products.id', 'attributes.id')

})

var update=((name, id)=>{
  return Knex("products").where({
    "id": id
  }).update({ "product_name": name});
})

module.exports = {
  inserting, update, selectProducts, attributeInsert
}
