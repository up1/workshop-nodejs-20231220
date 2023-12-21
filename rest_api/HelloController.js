const express = require('express');
const axios = require('axios');
const router = express.Router();

/**
 * https://jsdoc.app/
 * Describe my function
 * @param {string} name - The title of the book.
 * @returns {string} The title of the book.
 */
const myFunction = (name) => {
    return 'Hello World ' + name;
}

const db = require('./database')

/**
 * @typedef
 * @property {string} message.required - Message from database
 */
const myResponse = { 
    message: '' 
};

router.get('/db', async (req, res, next) => {
    // Get data from postgresql
    try {
        const response = await db.getMessage(); 
        myResponse.message = response.rows[0].message;
        res.json(myResponse)
    } catch (error) {
        let e = new Error('Error from database');
        e.status = 500;
        e.message = error.message;
        next(e)
    }
})

router.get('/', async (req, res, next) => {
    myFunction(1)
    // Call external api with axios
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        // Success
        res.json({ message: 'Hello World with ' + response.data.name })
    } catch (error) {
        let e = new Error('Error from external api');
        e.status = 500;
        e.message = error.message;
        next(e)
    }
})

module.exports = { router };