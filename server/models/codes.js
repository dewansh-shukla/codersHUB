const mongoose = require('mongoose')
const codeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  codes: [
    {
      language: { type: String, required: true },
      body: { type: String, required: true },
      date: { type: Date, default: Date.now },
      tag: { type: String, required: true },
    },
  ],
})
const Codes = mongoose.model('Codes', codeSchema)
module.exports = Codes
