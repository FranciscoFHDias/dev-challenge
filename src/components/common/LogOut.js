import React from 'react'
import { Link } from 'react-router-dom'
import client from '../../client'

const LogOut = () => {

  const logout = () => {
    localStorage.clear()
    client.resetStore()
  }

  return (
    <div className="form-group col-md-6">
      <Link to='/'>
        <button className="btn btn-light" onClick={logout}>
          Logout
        </button>
      </Link>
    </div>
  )
}

export default LogOut