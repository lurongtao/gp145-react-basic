import React, { Component } from 'react'

export default class RenderPropsChild extends Component {
  state = {
    item1: 'list item 1',
    item2: 'list item 2'
  }

  render() {
    return (
      <div>
        <h1>child</h1>
        <div>
          {
            this.props.render(this.state.item1)
          }
        </div>
        <div>
          {
            this.props.render(this.state.item2)
          }
        </div>
      </div>
    )
  }
}
