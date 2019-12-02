import React, { Component } from 'react'

import store from '../redux/counter/store'

export default class Counter1 extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }
  render() {
    return (
      <div>
        {store.getState().counter}
      </div>
    )
  }
}
