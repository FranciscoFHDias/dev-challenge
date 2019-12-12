import {  gql } from 'apollo-server'

export default gql`

  type Product {
    id: ID!
    name: String!
    supplier: String!
    price: Int!
    user: User!
  }

  extend type Query {
    product(id: ID!): Product!
    products: [Product!]!
  }

  extend type Mutation {
    createProduct(name: String!, supplier: String!, price: Int!): Product!
  }
`