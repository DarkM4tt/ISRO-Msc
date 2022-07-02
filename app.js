const express = require('express')
const planetsRouter = require('./src/routes/planets/planets.router')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const PORT = process.env.PORT || 8000
const app = express()

app.use(
  cors({
    origin: PORT || 'http://localhost:3000',
  })
)
app.use(morgan('combined'))

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public'))) //for serving static files on server.

app.use(planetsRouter)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app
