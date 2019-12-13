import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { useForm } from '../lib/hooks'
import { LOGIN } from '../lib/queries'
import { Redirect } from 'react-router'

const Login = () => {
  const { values, handleChange, handleSubmit } = useForm((credentials) => loginUser(), {
    username: '',
    password: ''
  })

  const [loginUser, { called, loading, data, error }] = useLazyQuery(LOGIN, { variables: values })
  
  if (called && loading) return 'Loading'
  if (error) return `Error ${error.message}`
  if (data) {
    localStorage.setItem('token', data.login.token)
    return <Redirect to='/products'/>
  }

  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 main">
            <h1 className="page-header">Welcome</h1>
            <form className="row">
              <div className="form-group col-md-6">
                <label htmlFor="selSupplier">
                  Username
                  <input 
                  className="form-control" 
                  id="selSupplier"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your username" />
                </label>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="selProduct">
                  Password
                  <input 
                  className="form-control" 
                  id="selProduct"
                  value={values.password}
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Your password" />
                </label>
              </div>
              <div className="form-group col-md-6">
                <div className="btn btn-light" onClick={handleSubmit}>
                  login
                </div>
              </div>
              <div className="form-group col-md-6">
                <div 
                  className="btn btn-light">
                  need to create an account?
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
  
}

export default Login

