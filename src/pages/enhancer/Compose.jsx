import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>header</h1>
        {this.props.children}
      </div>
    )
  }
}

export default class Compose extends Component {
  render() {
    return (
      <Header>
        {this.props.children}
      </Header>
    )
  }
}
