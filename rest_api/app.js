const express = require('express')
const axios = require('axios')
const app = express()

app.get('/hello', async (req, res, next) => {
    // Call external api with axios
    try {
        const response = await axios.get('https://jsonplaceholder2.typicode.com/users/1');
        // Success
        res.json({ message: 'Hello World with ' + response.data.name })
    } catch (error) {
        next(error)
        // res.status(500).json({ message: 'Error ' + error.message })
    }
})

app.use((error, req, res, next) => {
    res.status(500).json({ message: 'Error ' + error.message })
})

module.exports = app