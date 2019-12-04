import React, { Component } from 'react'

export default class List extends Component {
  handleClick = () => {
    this.props.history.push({pathname: '/tv', state: { id: 2 }})
  }

  render() {
    console.log(this.props.location.state)
    return (
      <div onClick={this.handleClick}>
        MovieList
      </div>
    )
  }
}
