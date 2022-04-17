const express = require('express')
const router = express.Router()
const { home, compiler, addData } = require('../controller/homeController')
const { verifyJWT } = require('../middleware/verifyJWT')
router.get('/', verifyJWT, home)
router.post('/', compiler)
router.post('/add', addData)
module.exports = router
