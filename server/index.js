const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./models/users')
var cors = require('cors')
const PORT = 4000

const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json(), urlencodedParser)
app.use(cors())

app.post('/login', (req, res) => {
  const userLogginIn = req.body
  User.findOne({ username: userLogginIn.username }).then((dbUser) => {
    if (!dbUser) {
      return res.json({
        message: 'Invalid Username or Password',
      })
    }
    bcrypt.compare(userLogginIn.password, dbUser.password).then((isCorrect) => {
      if (isCorrect) {
        const payload = {
          id: dbUser._id,
          username: dbUser.username,
        }
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: 86400 },
          (err, token) => {
            if (err) return res.json({ message: err })
            return res.json({
              message: 'Success',
              token: 'Bearer' + token,
            })
          }
        )
      } else {
        return res.json({ message: 'Invalid Username or Password' })
      }
    })
  })
})

app.post('/register', async (req, res) => {
  const user = req.body
  const takeUsername = await User.findOne({ username: user.username })
  const takeEmail = await User.findOne({ email: user.email })
  if (takeUsername || takeEmail) {
    res.json({ message: 'Username or email has already been taken' })
  } else {
    user.password = await bcrypt.hash(req.body.password, 10)
    const dbUser = new User({
      username: user.username.toLowerCase(),
      email: user.email.toLowerCase(),
      password: user.password,
    })
    dbUser.save()
    res.send('User added succesfully')
  }
})

function verifyJWT(req, res, next) {
  const token = req.headers['x-access-token']?.split(' ')[1]

  if (token) {
    jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
      if (err)
        return res.json({
          isLoggedIn: false,
          message: 'failed to authenticate',
        })
      ;(req.user = {}), (req.user.id = decoded.id)
      req.user.username = decoded.username
      next()
    })
  } else {
    res.json({ message: 'Incorrect Token Given' })
  }
}

app.get('/isUserAuth', verifyJWT, (req, res) => {
  res.json({ isLoggedIn: true, username: req.user.username })
})

const dbURI =
  'mongodb+srv://Dewansh:dewansh123@cluster0.phoys.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    app.listen(PORT, () => console.log('server is live'))
  })
  .catch((err) => console.log(err))
