require('dotenv').config()
const pg = require('pg')
const pool = new pg.Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: 5432,
});

const getMessage = async (request, response, next) => {
    try {
        const res = await pool.query('SELECT * FROM messages');
        return res;
    } catch (error){
        throw error;
    }
};

module.exports = {
    getMessage,
};