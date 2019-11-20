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

module.exports=knex