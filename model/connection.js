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

module.exports=knex