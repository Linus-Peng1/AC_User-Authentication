const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const User = require('./models/user')

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
app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  const { email, password } = req.body

  User.find({ email, password })
    .lean()
    .then(user => {
      if (user.length === 1) {
        res.render('welcome', { name: user[0].firstName })
      }
      res.render('login', { loginFail: "true", email })
    })
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}/login`)
})