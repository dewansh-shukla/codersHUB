const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const User = require('./models/users')
require('dotenv').config()
var cors = require('cors')
const connectDB = require('./config/db.js')
const PORT = 4000
const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

connectDB()
app.use(bodyParser.json(), urlencodedParser)
app.use(cors())
app.use('/login', require('./routes/login'))
app.use('/', require('./routes/register'))

// function verifyJWT(req, res, next) {
//   const token = req.headers['x-access-token']?.split(' ')[1]

//   if (token) {
//     jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
//       if (err)
//         return res.json({
//           isLoggedIn: false,
//           message: 'failed to authenticate',
//         })
//       ;(req.user = {}), (req.user.id = decoded.id)
//       req.user.username = decoded.username
//       next()
//     })
//   } else {
//     res.json({ message: 'Incorrect Token Given' })
//   }
// }

// app.get('/isUserAuth', verifyJWT, (req, res) => {
//   res.json({ isLoggedIn: true, username: req.user.username })
// })

app.listen(PORT, () => console.log('server is live'))
