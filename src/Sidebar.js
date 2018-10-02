import React, { Component } from 'react';
import CheckoutBtn from './CheckoutBtn.js';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <h2>Subtotal: ${this.props.subtotal}</h2>
        <h4>Cart: {this.props.cartSize}</h4>
        <CheckoutBtn handler={this.props.checkout} />
      </div>
    );
  }
}

export default Sidebar;
