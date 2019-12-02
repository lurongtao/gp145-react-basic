import React, { Component } from 'react'

import { colorContext } from '../context/color_context'

export default class Child1 extends Component {

  static contextType = colorContext

  render() {
    return (
      <div style={{color: this.context.color}}>
        child1
      </div>
    )
  }
}
