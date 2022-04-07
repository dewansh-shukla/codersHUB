const User = require('../models/users')
const Axios = require('axios')
const home = async (req, res) => {
  var userData = req.user
  user = await User.findById(userData.id).select('-password')
  res.json(user)
}

const compiler = async (req, res) => {
  let code = req.body.code
  let language = req.body.language
  let input = req.body.input

  if (language === 'python') {
    language = 'py'
  }

  let data = {
    code: code,
    language: language,
    input: input,
  }
  let config = {
    method: 'post',
    url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  }
  Axios(config)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}

module.exports = { home, compiler }
