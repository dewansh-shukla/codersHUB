const express = require('express')
const router = express.Router()
const {
  home,
  compiler,
  addData,
  getCodes,
  deleteCodes,
} = require('../controller/homeController')
const { verifyJWT } = require('../middleware/verifyJWT')
router.get('/', verifyJWT, home)
router.post('/', compiler)
router.post('/add', addData)
router.get('/getCodes/:id', getCodes)
router.delete('/delete/:id', deleteCodes)
module.exports = router
