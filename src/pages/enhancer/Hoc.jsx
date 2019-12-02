import React, { Component } from 'react'

import hoc from './hoc.js'

class Hoc extends Component {
  static defaultProps = {
    title: 'hello'
  }

  handleClick = () => {
    console.log(this.props.changeTitle(this.props.title))
  }

  render() {
    return (
      <div>
        {this.props.title}
        <button onClick={this.handleClick}>change title</button>
      </div>
    )
  }
}

export default hoc(Hoc)
