import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: { type: String, required: 'Please provide a Name!', unique: true },
  supplier: { type: String, required: 'Please provide a Supplier name!' },
  price: { type: Number, required: 'Please provide a Cost!', min: 1 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Product', productSchema)