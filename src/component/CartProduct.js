import React from 'react';
import './CartProduct.css';



class CartProduct extends React.Component {

  render() {
    return (
        <li className="cart-product">
          <img src={this.props.image} alt={this.props.name} className="cart-product__img" />
          <div className="cart-product__content">
            <h3 className="cart-product__title">{this.props.name}</h3>
            <p>{this.props.description}</p>
          </div>
        </li>
    )
  }
}

export default CartProduct;