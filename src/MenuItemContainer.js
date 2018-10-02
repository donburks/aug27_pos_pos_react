import React, { Component } from 'react';
import MenuItem from './MenuItem.js';

class MenuItemContainer extends Component {
  render() {
    return (
      <div id="container">
        {this.props.items.map(item => <MenuItem handler={this.props.addtocart} name={item.name} price={item.price} />)}
      </div>
    );
  }
}

export default MenuItemContainer;
