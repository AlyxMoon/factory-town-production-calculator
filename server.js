const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')
require('dotenv').config()

const { PORT, HOST } = require('./config/server')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(history())
app.use(express.static(path.join(__dirname, 'dist')))
app.get('/', (req, res) => res.render(path.join(__dirname, 'dist/index.html')))

app.listen(PORT, HOST)
console.log(`started factory-town-production-calculator server. Listening on: ${PORT}:${HOST}`)
