const express = require('express')
const app = express()

// Routes
const helloRoute = require('./HelloController')
app.use('/hello', helloRoute.router)

// Error handler
const middlewares = require('./middlewares')
app.use(middlewares.errorLog)
app.use(middlewares.errorHandler)

module.exports = app