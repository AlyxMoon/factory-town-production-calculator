const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
})

const { PORT, HOST } = require('./config/server')
const app = express()

app.use('/static', express.static(path.join(__dirname, 'dist', 'static')))
app.use(history())

app.listen(PORT, HOST)
