const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const User = require('./models/user')
const routes = require('./routes')

const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.use(routes)

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}/login`)
})