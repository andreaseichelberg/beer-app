import React, { Component } from 'react';
import './Search.css';
import Thumbnail from './Thumbnail';



class Search extends React.Component {
  constructor() {
    super()
    this.state = { 
      searchText: "", 
      products: [] 
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchText: event.target.value});
  }

  handleSubmit() {
    let products = [];
    console.log(this.state.searchText);

    fetch('https://api.punkapi.com/v2/beers?beer_name=' + this.state.searchText)
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data })
      })

      console.log(this.state.products);
  }

  render() {
    return (
      <div>
        <div className="search">
          <form action="#!" onSubmit={this.handleSubmit} className="container">
            <input type="text" className="textbox" placeholder="Search for our beers..." value={this.state.searchText} onChange={this.handleChange}/>
            <button type="submit" className="button">Search</button>
          </form>
        </div>
        <div className="container">
          <ul className="product-list">
            {this.state.products.map(product => {
              // return <li key={`movie-${product.id}`}>{product.name}</li>
              return <Thumbnail key={`product-${product.id}`} name={product.name} image={product.image_url} description={product.description} />
            })}
          </ul>
        </div>

      </div>
    )
  }
}

export default Search;