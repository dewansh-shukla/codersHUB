const mongoose = require('mongoose')

const connectDB = async () => {
  const dbURI = process.env.MONGO_URI

  mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
      console.log(`Connected to DB  ${res.connection.host} `)
    })
    .catch((err) => console.log(err))
}

module.exports = connectDB
