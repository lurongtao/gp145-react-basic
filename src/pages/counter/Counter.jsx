import React, { Component } from 'react'

import storeContext from '../context/store_context'

export default class Counter extends Component {
  state = {
    counter: 0
  }

  static contextType = storeContext

  increment = () => {
    this.context.dispatch({
      type: 'increment'
    })
    console.log(this.context.getState())
  }

  componentDidMount () {
    this.context.subscribe(() => {
      this.setState({
        counter: this.context.getState().counter
      })
    })

    setTimeout(() => {
      this.context.dispatch({
        type: 'loadData',
        data: 100
      })
    }, 5000)
  }

  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
