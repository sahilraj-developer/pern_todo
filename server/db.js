const { Pool } = require('pg');

const pool = new Pool({
    user:"postgress",
    password:'',
    host:"localhost",
    port:"5432",
    database:"pernrodo"
});

module.exports = pool;