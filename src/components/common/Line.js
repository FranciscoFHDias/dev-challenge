import React from 'react'

const Line = ({ ...product }) => {

  return(
    <tr>
      <td>{product.id}</td>
      <td>{product.supplier}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default Line