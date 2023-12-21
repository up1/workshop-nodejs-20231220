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
        // Exception tracking
        // https://docs.sentry.io/platforms/node/express/

        throw error;
    }
};

module.exports = {
    getMessage,
};