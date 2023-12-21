require('dotenv').config()
const app = require('./app')
const port = process.env.PORT || 3000

const server = app.listen(port)
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed')
  })
})
