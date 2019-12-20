import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { useForm } from '../common/hooks'
import { LOGIN } from '../common/queries'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
 
const Login = () => {

  if (localStorage.getItem('token')){
    localStorage.clear()
  }

  const { values, handleChange, handleSubmit } = useForm((credentials) => loginUser(), {
    username: '',
    password: ''
  })

  const [loginUser, { called, loading, data, error }] = useLazyQuery(LOGIN, { variables: values })
  
  if (called && loading) return 'Loading'

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
                <label htmlFor="username">
                  Username
                  <input 
                  className="form-control" 
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your username" />
                </label>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="password">
                  Password
                  <input 
                  className="form-control" 
                  value={values.password}
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Your password" />
                </label>
                {error && <p>{`Error ${error.message}`}</p>}
              </div>
              <div className="form-group col-md-6">
                <button className="btn btn-light" onClick={handleSubmit}>
                  login
                </button>
              </div>
              <div className="form-group col-md-6">
                <Link className="btn btn-light" to='/newUser'>
                    need to create an account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
  
}

export default Login

