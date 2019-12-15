import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useForm } from '../common/hooks'
import { NEW_PRODUCT, ALLPRODUCTS } from '../common/queries'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

const New = () => {
  const { values, handleChange, handleSubmit } = useForm((credentials) => createProduct(), {
    name: '',
    price: 0,
    supplier: ''
  })

  const [createProduct, { loading, data, error }] = useMutation(NEW_PRODUCT, { variables: values, refetchQueries: [{ query: ALLPRODUCTS }] })

  if (loading) return 'Loading'
  if (data) {
    return <Redirect to='/products'/>
  }

  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 main">
            <h1 className="page-header">New Product</h1>
            <form className="row">
              <div className="form-group col-md-6">
                <label htmlFor="selProduct">
                  Name
                  <input 
                  className="form-control" 
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Product name" />
                </label>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="SelPrice">
                  Price
                  <input 
                  className="form-control" 
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  min= "0"
                  type="number" />
                </label>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="selSupplier">
                  Supplier
                  <input 
                  className="form-control" 
                  value={values.supplier}
                  name="supplier"
                  onChange={handleChange}
                  type="text"
                  placeholder="Product supplier" />
                </label>
                {error && <p>{`Error ${error.message}`}</p>}
              </div>
              <div className="form-group col-md-6">
                <button className="btn btn-light" onClick={handleSubmit}>
                  Save
                </button>
              </div>
              <div className="form-group col-md-6">
                <Link className="btn btn-light" to="/products">
                    All products
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
  
}

export default New

