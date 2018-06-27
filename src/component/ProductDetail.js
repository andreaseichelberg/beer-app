import React, { Component } from 'react';
import './ProductDetail.css';



class ProductDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "", 
      image: "", 
      description: "", 
      abv: ""
    };
  }

  callApi(){
    // Call the API page
    fetch('https://api.punkapi.com/v2/beers/random')
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then((jsonResult) => {
      // Do something with the result
      console.log(jsonResult);
      this.setState({title: jsonResult[0].name});
      this.setState({image: jsonResult[0].image_url});
      this.setState({description: jsonResult[0].description});
      this.setState({abv: jsonResult[0].abv})
      console.log("DONE");
    })
  }

  componentWillMount() {
    this.callApi();
  }
  
  render() {
    return (
      <div className="product container">
        <div className="row">
          <div className="col col-4">
            {this.state.image && <img src={this.state.image} alt="{this.state.title}" className="product__image"/>}
          </div>
          <div className="col col-8">
            <div className="">
              {this.state.title && <h1 className="product__title">{this.state.title}</h1>}
              <div className="col col-6">
                
                {this.state.description && <p>{this.state.description}</p>}
              </div>
              <div className="col col-6 align-right">
                {this.state.abv && <p><strong>ABV:</strong> {this.state.abv}%</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
            <button className="button button--full" onClick={() => this.callApi()}>
              Show me another Beer 
            </button>
          </div>
      </div>
    );
  }
}

export default ProductDetail;