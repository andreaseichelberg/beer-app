import React, { Component } from 'react';
import './Thumbnail.css';



class Thumbnail extends React.Component {

  render() {
    return (
        <li className="thumbnail">
          <img src={this.props.image} alt={this.props.name} className="thumbnail__img" />
          <div className="thumbnail__content">
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
          </div>
        </li>
    )
  }
}

export default Thumbnail;