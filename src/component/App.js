import React, { Component } from 'react';
import './App.css';
import ProductDetail from './ProductDetail.js';
import Search from './Search.js';



class App extends Component {
  
  render() {

    return (
      <div className="app">
        <ProductDetail />
        <Search />
      </div>
    );
  }
}

export default App;
