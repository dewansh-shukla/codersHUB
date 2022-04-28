const User = require('../models/users')
const Codes = require('../models/codes')
const Axios = require('axios')

const home = async (req, res) => {
  var userData = req.user
  user = await User.findById(userData.id).select('-password')
  if (user) {
    res.json(user)
  } else res.json({ isLoggedIn: false, message: 'user is not logged In' })
}
//Post code to api for execution
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

//Post
// Add Codes
const addData = (req, res) => {
  const data = req.body
  const code = new Codes({
    user_id: data.id,
    tag: data.tags.toLowerCase(),
    codename: data.codename,
    codes: {
      language: data.language,
      body: data.code,
      tag: data.tags.toLowerCase(),
    },
  })
  code.save()

  res.status(200).json({ message: 'Data received', info: data })
}

//Get Codes for the user
const getCodes = async (req, res) => {
  const id = req.params.id
  try {
    console.time('Home')
    const data = await Codes.find({ user_id: id })
    console.timeEnd('Home')
    const codes = []
    data.map((value, index) => {
      codes.push({
        codes: value.codes,
        tag: value.tag,
        codename: value.codename,
      })
    })
    res.json(codes)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { home, compiler, addData, getCodes }
