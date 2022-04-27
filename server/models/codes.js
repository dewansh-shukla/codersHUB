const mongoose = require('mongoose')
const codeSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  tag: { type: String, required: true },
  codes: {
    language: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
})
const Codes = mongoose.model('Codes', codeSchema)
module.exports = Codes
