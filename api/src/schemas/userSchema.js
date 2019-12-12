import { gql } from 'apollo-server'

export default gql`

  type User {
    id: ID!
    username: String!
    email: String!
    products: [Product!]!
  }

  type Token {
    token: String!
  }

  extend type Query {
    user(id: ID!): User!
    login(username: String!, password: String!): Token
  }

  extend type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
  }
`