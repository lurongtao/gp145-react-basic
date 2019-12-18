import React, { Component } from 'react'
import Test from './Test'
export default class Counter extends Component {
  state = {
    user: 0
  }
  render() {
    return (
      <div>
        <h1>parent</h1>
        <button onClick={() => {
          this.setState((state) => {
            return {
              user: state.user + 1
            }
          })
        }}> change </button>
        <h1>child</h1>
        <Test user={this.state.user}></Test>
      </div>
    )
  }
}
