const User = require('../models/users')

const home = async (req, res) => {
  var userData = req.user
  user = await User.findById(userData.id).select('-password')
  res.json(user)
}

module.exports = { home }
