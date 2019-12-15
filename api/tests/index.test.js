import axios from 'axios'
import "babel-polyfill"

describe('All Products resolvers', () => {
  test('products', async () => {
    const response = await axios.post('http://localhost:4000/', {
      query: `
      query {
        products {
          id
          name 
          price
          supplier
        }
      }
      ` 
    })
    const { data } = response
    expect(data).toMatchObject({
      data: {
        products: [
          {
            id: "5df6443ca4c1536bd58bf78f",
            name: "Small wongle",
            price: 5,
            supplier: "New Co Ltd"
          },
          {
            id: "5df6443ca4c1536bd58bf793",
            name: "Small wongle",
            price: 6,
            supplier: "Old Co Ltd"
          },
          {
            id: "5df6443ca4c1536bd58bf790",
            name: "Large wongle",
            price: 8,
            supplier: "New Co Ltd"
          },
          {
            id: "5df6443ca4c1536bd58bf792",
            name: "Mini wongle",
            price: 4,
            supplier: "Old Co Ltd"
          },
          {
            id: "5df6443ca4c1536bd58bf791",
            name: "Super wongle",
            price: 12,
            supplier: "New Co Ltd"
          },
          {
            id: "5df6443ca4c1536bd58bf795",
            name: "Super wongle",
            price: 13,
            supplier: "Old Co Ltd"
          },
          {
            id: "5df6443ca4c1536bd58bf794",
            name: "Large wongle",
            price: 9,
            supplier: "Old Co Ltd"
          }
        ]
      }
    })
  })
})