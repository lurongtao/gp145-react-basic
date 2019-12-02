import React, { Component } from 'react'

export default (Comp) => {
  return class extends Component {
    render() {
      return (
        <Comp title="hello"></Comp>
      )
    }
  }
}