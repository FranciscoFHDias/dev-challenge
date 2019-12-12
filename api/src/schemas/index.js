import userSchema from './userSchema'
import productSchema from './productSchema'
import { gql } from 'apollo-server'

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`

export default [linkSchema, userSchema, productSchema]