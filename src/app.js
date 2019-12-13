import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import client from './client'

import Home from './components/pages/Home'
import Products from './components/products/Index'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'

class App extends React.Component {
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/" component={Home} />
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