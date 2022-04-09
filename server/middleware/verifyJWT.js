const jwt = require('jsonwebtoken')
const verifyJWT = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (token) {
    jwt.verify(token, 'abc123', (err, decoded) => {
      if (err)
        return res.status(400).json({
          error: err,
          isLoggedIn: false,
          message: 'Failed to Authenticate',
        })
      req.user = {
        username: decoded.username,
        id: decoded.id,
        isLoggedIn: true,
        message: 'Authenticated',
      }

      next()
    })
  } else {
    res.json({ message: 'Incorrect token', isLoggedIn: false })
  }
}

module.exports = { verifyJWT }
