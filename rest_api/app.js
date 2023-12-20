const express = require('express')
const axios = require('axios')
const app = express()

app.get('/hello', async(req, res) => {
  // Call external api with axios
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    res.json({message: 'Hello World with ' + response.data.name})
  } catch (error) {
    res.status(500).json({message: 'Error ' + error.message})
  }
})

module.exports = app