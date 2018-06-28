import React from 'react';
import './CartProduct.css';

const maxLength = 250;

class CartProduct extends React.Component {

  render() {
    const text = this.props.description;
    return (
      <li className="cart-product">
        <img src={this.props.image} alt={this.props.name} className="cart-product__img" />
        <div className="cart-product__content">
          <h3 className="cart-product__title">{this.props.name}</h3>

          <div>
            {text.length > maxLength ?
              (
                <p>
                  {`${text.substring(0, maxLength)}...`}
                </p>
              ) :
              <p>{text}</p>
            }
          </div>
        </div>
      </li>
    )
  }
}

export default CartProduct;