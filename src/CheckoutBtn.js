import React, { Component } from 'react';

class CheckoutBtn extends Component {
  render() {
    return (
      <button onClick={this.props.handler} className="button">Checkout</button>
    );
  }
}

export default CheckoutBtn;
