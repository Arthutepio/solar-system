import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    console.log('test', headline);
    return (
      <h2>{ headline }</h2>
    );
  }
}
