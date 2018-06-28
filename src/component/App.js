import React, { Component } from 'react';
import './App.css';
import './inputs.css';
import DetailProduct from './DetailProduct.js';
import Search from './Search.js';
import Footer from './Footer.js';



class App extends Component {
  
  render() {

    return (
      <div className="app">
        <DetailProduct />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
