const pg = require('pg')
const pool = new pg.Pool({
    host: 'localhost',
    database: 'demo',
    user: 'user',
    password: 'password',
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