const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  products: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Product'}
  ]
})

userSchema.pre('save', function() {
  const hashedPassword = bcrypt.hashSync(this.password, 12)
  this.password = hashedPassword
})

module.exports = mongoose.model('User', userSchema)
