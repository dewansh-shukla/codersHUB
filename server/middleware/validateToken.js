const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/users')

async function validateToken(req, res, next) {
  const authorizationHeader = req.headers.authorization
  let result
  if (!authorizationHeader) {
    return res.status(401).json({
      error: true,
      message: 'Access token is missing',
    })
  }
  const token = req.headers.authorization.split(' ')[1]
  const options = {
    expiresIn: '24h',
  }
  try {
    let user = await User.findOne({
      accessToken: token,
    })
    if (!user)
      return res
        .status(403)
        .json({ error: true, message: 'Authorization error' })

    result = jwt.verify(token, process.env.JWT_KEY, options)
    if (!user.username === result.username) {
      result = {
        error: true,
        message: 'Invalid token',
      }
      return res.status(401).json(result)
    }
    req.decoded = result
  } catch (error) {
    console.log(error)
    return res.status(403).json({
      error: true,
      message: 'authentication error',
    })
  }
}
module.exports = { validateToken }
