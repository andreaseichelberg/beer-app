import React from 'react';
import './Search.css';
import CartProduct from './CartProduct';

class Search extends React.Component {
  constructor() {
    super()
    this.state = { 
      searchText: "", 
      selectedOption: "option1",
      searchPlaceholder: "Search for our beers...",
      errorMsg: "",
      products: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchText: event.target.value});
  }

  handleOptionChange(event) {
    this.setState({selectedOption: event.target.value});

    if (this.state.selectedOption === "option1") {
      this.setState({searchPlaceholder: 'Find our beer recommondations to your dish...'});
    }

    else {
      this.setState({searchPlaceholder: 'Search for our beers...'});
    }
  }


  handleSubmit(e) {
    e.preventDefault();

    if (this.state.searchText !== "") {

      if(!/[^a-zA-Z0-9- ]/.test(this.state.searchText)) {
        this.setState({errorMsg: ''});

        let urlCall = "";

        if (this.state.selectedOption === "option1") {
          urlCall = 'https://api.punkapi.com/v2/beers?beer_name=' + this.state.searchText;
        }

        else {
          urlCall = 'https://api.punkapi.com/v2/beers?food=' + this.state.searchText;
        }

        fetch(urlCall)
          .then(result => result.json())
          .then(data => {
            this.setState({ products: data })
          })
        }

      else {
        this.setState({errorMsg: 'Please dont use special characters for your search!'});
      }
    } 
  }



  render() {
    return (
      <div>

        <div className="search">
          <form onSubmit={this.handleSubmit} className="container">
            <input type="text" className="textbox" placeholder={this.state.searchPlaceholder} value={this.state.searchText} onChange={this.handleChange}/>
            

            <input type="radio" id="option1" name="option" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} /><label htmlFor="option1">Beer</label>
            <input type="radio" id="option2" name="option" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange} /><label htmlFor="option2">Food</label>

            <button type="submit" className="button">Search</button>

            {this.state.errorMsg && <p className="error">{this.state.errorMsg}</p>}
          </form>
        </div>

        <div className="container">
          <h3>{this.state.products.length} Beers have been found</h3>
          <ul className="product-list">
            {this.state.products.map(product => {
              return <CartProduct key={`product-${product.id}`} name={product.name} image={product.image_url} description={product.description} />
            })}
          </ul>
        </div>

      </div>
    )
  }
}

export default Search;