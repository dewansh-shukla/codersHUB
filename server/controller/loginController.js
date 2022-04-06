const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const loginUser = (req, res) => {
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
        jwt.sign(payload, 'abc123', { expiresIn: 86400 }, (err, token) => {
          if (err) return res.json({ message: err })

          return res.json({
            message: 'Success',
            token: 'Bearer ' + token,
          })
        })
      } else {
        return res.json({ message: 'Invalid Username or Password' })
      }
    })
  })
}

module.exports = { loginUser }
