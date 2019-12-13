import mongoose from 'mongoose'
import Product from '../models/Product'
import User from '../models/User'
import productData from './data/productData'
import userData from './data/userData'
import { dbURI } from '../config/enviroment'

mongoose.connect(dbURI, { useNewUrlParser: true })
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => Product.create(productData))
  .then(() => User.create(userData))
  .then(() => console.log('Successfully seeded!'))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close())