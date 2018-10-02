import React, { Component } from 'react';
import MenuItemContainer from './MenuItemContainer.js';
import Sidebar from './Sidebar.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {name: "Hot Dogs", price: 1},
        {name: "Poke Bowl", price: 45},
        {name: "Burrito", price: 12},
        {name: "Sushi", price: 5}
      ],
      cart: []
//      cart: [2, 3, 4, 5, 6]
    };

    this.checkout = this.checkout.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

/*  addToCart(price) {
    this.setState({cart: this.state.cart.concat(price)});
  }
 */

  addToCart(e) {
    const el = e.target;
    const price = Number(el.getAttribute('data-price'));
    this.setState({cart: this.state.cart.concat(price)});
  }

  checkout() {
    this.setState({cart: []});
  }

  subtotal() {
    return this.state.cart.reduce((subtotal, item) => subtotal + item, 0);
  }

  render() {
    return (
      <div className="App">
        <MenuItemContainer items={this.state.menu} addtocart={this.addToCart} />
        <Sidebar subtotal={this.subtotal()} cartSize={this.state.cart.length} checkout={this.checkout} />
      </div>
    );
  }
}

export default App;
