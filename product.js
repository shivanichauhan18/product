const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'navgurukul',
        database: 'product'
    }
}

const knex = require('knex')(options);

knex.schema.createTable('product', (table) => {
    table.increments('id')
    table.string('name')
    table.string('image')
    table.string('attribute')
}).then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });