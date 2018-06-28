import React from 'react';
import './DetailProduct.css';
import fetch from 'isomorphic-fetch';



class DetailProduct extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "", 
      image: "", 
      description: "", 
      brewers_tips: "",
      abv: "",
      tagline: "",
      product: []
    };
  }

  callApi(){
    let urlCall = 'https://api.punkapi.com/v2/beers/random'

    fetch(urlCall)
    .then(result => result.json())
      .then(data => {

      this.setState({title: data[0].name});
      this.setState({image: data[0].image_url});
      this.setState({description: data[0].description});
      this.setState({abv: data[0].abv})
      this.setState({brewers_tips: data[0].brewers_tips})
      this.setState({tagline: data[0].tagline})
    })
  }

  //Issue here for some reason
  componentDidMount() {
    this.callApi();
  }
  
  render() {
    return (
      <div className="container">
        <div className="product">
          <div className="row">
            <div className="col col-4">
              {this.state.image && <img src={this.state.image} alt="{this.state.title}" className="product__image"/>}
            </div>
            <div className="col col-8">
              <div className="">
                {this.state.title && <h1 className="product__title">{this.state.title}</h1>}
                <div className="col col-6">
                  {this.state.tagline && <h3 className="product__tagline">{this.state.tagline}</h3>}
                  {this.state.description && <p>{this.state.description}</p>}
                  {this.state.brewers_tips && <div><h4>Brewers Tip</h4> <p>{this.state.brewers_tips}</p></div>}
                </div>
                <div className="col col-6 align-right">
                  {this.state.abv && <p><strong>ABV:</strong> {this.state.abv}%</p>}
                </div>
              </div>
            </div>
          </div>
          <button className="button button--full" onClick={() => this.callApi()}>
            Show me another Beer 
          </button>
        </div>
      </div>
    );
  }
}

export default DetailProduct;