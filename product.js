const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'navgurukul',
        database: 'eCommerce'
    }
}

const knex = require('knex')(options);

knex.schema.createTable('products', (table) => {
    table.increments('id')
    table.string('product_name')
    table.string('image')
}).then(() => {
    knex.schema.createTable('attributes', (table) => {
        table.increments('id')
        table.string('attribute_name')
        table.integer('productId').unsigned()
        table.foreign('productId').references('id').inTable('products')
    })
    .then(() => {
        console.log("table created")
    })
})
.catch((err) => { console.log(err); throw err })
.finally(() => {
    knex.destroy();
});