import React, { useState } from 'react'
import Select from 'react-select'
import { ALLPRODUCTS } from '../common/queries'
import { useQuery } from'@apollo/react-hooks'
import LogOut from '../common/LogOut'
import Line from '../common/Line'
import { Link } from 'react-router-dom'
import _ from 'lodash'

const Index = () => {

  const [supplier, setSupplier] = useState('')
  const [prod, setProduct] = useState('')

  const { loading, error, data } = useQuery(ALLPRODUCTS)

  if (loading) return 'Loading'
  if (error) return `Error ${error.message}`

  const products = data.products.reduce((unique, product) => unique.includes(product.name) ? unique : [...unique, product.name], [])

  const suppliers = data.products.reduce((unique, product) => unique.includes(product.supplier) ? unique : [...unique, product.supplier], [])

  const list = (items) => items.map((item, ) => {
    return { value: item, label: item}
  })

  const filtered = _.filter(data.products, product => {
    return (supplier ? product.supplier.includes(supplier) : true) && (prod ? product.name.includes(prod) : true)
  })

  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12 main">
          <h1 className="page-header">Product pricing</h1>
          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="selSupplier">Supplier</label>
                  <Select options={list(suppliers)} onChange={supplier => setSupplier(supplier.value)}/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="selProduct">Product</label>
                  <Select options={list(products)} onChange={product => setProduct(product.value)}/>
              </div>
            </div>
          </form>

          <h2 className="sub-header">Product details</h2>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Supplier</th>
                  <th>Product</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(product => <Line key={product.id} {...product} /> )}
              </tbody>
            </table>
          </div>
          <LogOut />
          <div className="form-group col-md-6">
            <Link to="/newProduct">
              <button className="btn btn-light">
                New Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Index