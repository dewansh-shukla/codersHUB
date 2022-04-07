const express = require('express')
const router = express.Router()
const { home, compiler } = require('../controller/homeController')
const { verifyJWT } = require('../middleware/verifyJWT')
router.get('/', verifyJWT, home)
router.post('/', compiler)
module.exports = router
