const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8080
const apiRoutes = require('./routes/api.routes')
const cors = require('cors')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

/* Server Configs */
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, '..', 'build')))

/* Routes */
app.use('/api/v1', apiRoutes)
app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

/* Listener */
app.listen(PORT, () => {
  console.log('The server is up ma lord!')
})