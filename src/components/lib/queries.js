import gql from 'graphql-tag'


const LOGIN = gql`
query loginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        token
    }
}
`

const ALLPRODUCTS = gql`
query allproducts {
    products {
        id
        supplier
        name
        price
    }
}
`

export {
  LOGIN,
  ALLPRODUCTS
}