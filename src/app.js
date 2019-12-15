import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import client from './client'

import Login from './components/pages/Login'
import Products from './components/products/Index'
import NewProduct from './components/products/New'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'

class App extends React.Component {
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/newProduct" component={NewProduct} />
          <Route path="/products" component={Products} />
          <Route path="/" component={Login} />
        </Switch>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
)