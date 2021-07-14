const express = require('express')
const router = express.Router()

const User = require('../../models/user')

router.get('/', (req, res) => {
  const { email, password } = req.cookies
  // console.log('email: ' + email + ' / password: ' + password) // 觀察用

  User.find({ email, password })
    .lean()
    .then(user => {
      if (user.length === 1) {
        res.render('welcome', { name: user[0].firstName })
      }
      res.render('login', { email })
    })
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const { email, password } = req.body

  User.find({ email, password })
    .lean()
    .then(user => {
      if (user.length === 1) {
        res.cookie('email', email)
        res.cookie('password', password)
        res.render('welcome', { name: user[0].firstName })
      }
      res.render('login', { loginFail: "true", email })
    })
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router