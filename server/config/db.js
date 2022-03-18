const mongoose = require('mongoose')

const connectDB = async () => {
  const dbURI =
    'mongodb+srv://Dewansh:dewansh123@cluster0.phoys.mongodb.net/Cluster0?retryWrites=true&w=majority'
  mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
      console.log(`Connected to DB  ${res.connection.host} `)
    })
    .catch((err) => console.log(err))
}

module.exports = connectDB
