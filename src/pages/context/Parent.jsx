import React, { Component } from 'react'

import Child1 from './Child1'
import Child2 from './Child2'
export default class Parent extends Component {
  render() {
    return (
      <div>
        <Child1></Child1>
        <Child2></Child2>
      </div>
    )
  }
}
