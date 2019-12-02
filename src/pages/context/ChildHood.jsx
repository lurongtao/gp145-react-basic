import React, { Component } from 'react'

import { colorContext } from '../context/color_context'

export default class ChildHood extends Component {

  static contextType = colorContext

  handleClick = (green) => () => {
    this.context.changeColor(green)
  }

  render() {
    let { color } = this.context
    return (
      <div style={{color}}>
        childhood
        <button onClick={this.handleClick('green')}>change color</button>
      </div>
    )
  }
}
