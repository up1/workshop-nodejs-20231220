const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res, next) => {
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