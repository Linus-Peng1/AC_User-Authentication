const express = require('express')
const router = express.Router()

// 引入 login 模組程式碼
const login = require('./modules/login')

// 將網址結構符合 /login 字串的 request 導向 login 模組
router.use('/login', login)

module.exports = router