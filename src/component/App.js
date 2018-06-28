import React, { Component } from 'react';
import './App.css';
import './inputs.css';
import ProductDetail from './ProductDetail.js';
import Search from './Search.js';
import Header from './Header.js';
import Footer from './Footer.js';



class App extends Component {
  
  render() {

    return (
      <div className="app">
      	<Header />
        <ProductDetail />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
