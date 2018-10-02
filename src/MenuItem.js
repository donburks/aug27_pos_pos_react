import React, { Component } from 'react';

// <p onClick={() => this.props.handler(this.props.price)}><span>{this.props.name}</span>${this.props.price}</p>

class MenuItem extends Component {
  render() {
    return (
      <p data-price={this.props.price} onClick={this.props.handler}><span>{this.props.name}</span>${this.props.price}</p>
    );
  }
}

export default MenuItem;
