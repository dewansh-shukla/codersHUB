const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
var cors = require('cors')
const connectDB = require('./config/db.js')
const PORT = process.env.PORT || 4000
const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

connectDB()
app.use(bodyParser.json(), urlencodedParser)
app.use(cors())
app.use('/', require('./routes/registerRouter'))
app.use('/login', require('./routes/loginRouter'))
app.use('/home', require('./routes/homeRoutes'))

app.listen(PORT, () => console.log(`server is live ${PORT}`))
