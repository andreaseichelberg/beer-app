import React, { Component } from 'react';
import './App.css';
import './inputs.css';
import DetailProduct from './DetailProduct.js';
import Search from './Search.js';
import Header from './Header.js';
import Footer from './Footer.js';



class App extends Component {
  
  render() {

    return (
      <div className="app">
      	<Header />
        <DetailProduct />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
