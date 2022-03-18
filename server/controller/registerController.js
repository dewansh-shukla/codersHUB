const User = require('../models/users')
const bcrypt = require('bcrypt')

// Post   Route to register user
const register = async (req, res) => {
  {
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
      res.end('added user')
    }
  }
}

module.exports = { register }
