import React from 'react';

class Hello extends React.component {
  render() {
    console.log(this.props);
    return <h2>Hello, {this.props.name}</h2>;
  }
}

export default Hello;
