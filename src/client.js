import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

const httpLink = new HttpLink({uri: 'http://localhost:4000'})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      token: token ? `${token}` : "",
    }
  }
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
})

export default client