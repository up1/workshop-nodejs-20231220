const express = require('express')
const app = express()
app.use(express.json())

// Routes
const helloRoute = require('./HelloController')
app.use('/hello', helloRoute.router)

const demoRoute = require('./messaging/DemoController')
app.use('/demo', demoRoute.router)

// Error handler
const middlewares = require('./middlewares')
app.use(middlewares.errorLog)
app.use(middlewares.errorHandler)

module.exports = app