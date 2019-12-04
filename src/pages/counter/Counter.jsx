import React, { Component } from 'react'
import { bindActionCreators } from 'redux'

import store from '../redux/counter/store'
import counterActionCreatores from '../redux/counter/action_creators/counter'

import Counter1 from './Counter1'

export default class Counter extends Component {
  state = {
    counter: store.getState().counter.count
  }

  constructor() {
    super()
    this.bac = bindActionCreators(counterActionCreatores, store.dispatch)
  }

  componentDidMount() {
    // console.log(this.bac)
  }

  render() {
    console.log(this.bac)
    return (
      <div>
        {this.state.counter}
        <button onClick={this.increment}>+</button>

        <Counter1 {...this.bac}></Counter1>
      </div>
    )
  }
}
