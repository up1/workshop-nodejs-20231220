require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const Sentry = require('@sentry/node')
Sentry.init({ dsn: process.env.SENTRY_DSN })
app.use(Sentry.Handlers.requestHandler())

// Routes
const helloRoute = require('./HelloController')
app.use('/hello', helloRoute.router)

const demoRoute = require('./messaging/DemoController')
app.use('/demo', demoRoute.router)

// Error handler
app.use(Sentry.Handlers.errorHandler())

const middlewares = require('./middlewares')
app.use(middlewares.errorLog)
app.use(middlewares.errorHandler)

module.exports = app