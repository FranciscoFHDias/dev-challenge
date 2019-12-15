import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useForm } from '../common/hooks'
import { NEW_USER } from '../common/queries'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

const NewUser = () => {
  const { values, handleChange, handleSubmit } = useForm((credentials) => createUser(), {
    username: '',
    email:'',
    password: ''
  })

  const [createUser, { loading, data, error }] = useMutation(NEW_USER, { variables: values })
  
  if (loading) return 'Loading'
  if (data) {
    return <Redirect to='/'/>
  }

  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 main">
            <h1 className="page-header">New User</h1>
            <form className="row">
              <div className="form-group col-md-6">
                <label htmlFor="email">
                  Email
                  <input 
                  className="form-control" 
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your email" />
                </label>
              </div>
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
                <div className="btn btn-light" onClick={handleSubmit}>
                Create an account
                </div>
              </div>
              <div className="form-group col-md-6">
                <Link className="btn btn-light" to='/'>
                Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
  
}

export default NewUser