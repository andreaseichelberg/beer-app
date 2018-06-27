import React, { Component } from 'react';



class ProductList extends React.Component {
  constructor() {
    super()
    this.state = { products: [] }
  }

  render() {
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {this.state.products.map(product => {
            return <li key={`movie-${product.id}`}>{product.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default ProductList;