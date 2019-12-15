import gql from 'graphql-tag'

const LOGIN = gql`
query loginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        token
    }
}
`

const ALLPRODUCTS = gql`
query allProducts {
    products {
        id
        supplier
        name
        price
    }
}
`

const GET_CURRENT_USER = gql`
query logedIn{
    user {
        id
        username
    }
}
`
const NEW_PRODUCT = gql`
mutation newProduct($name: String!, $price: Int!, $supplier: String!) {
    createProduct(name: $name, price: $price, supplier: $supplier) {
        id
        name
        supplier
        price
    }
}
`

export {
  LOGIN,
  ALLPRODUCTS,
  GET_CURRENT_USER,
  NEW_PRODUCT
}