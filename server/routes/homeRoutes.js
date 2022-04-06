const express = require('express')
const router = express.Router()
const { home } = require('../controller/homeController')
const { verifyJWT } = require('../middleware/verifyJWT')
router.get('/', verifyJWT, home)

module.exports = router
