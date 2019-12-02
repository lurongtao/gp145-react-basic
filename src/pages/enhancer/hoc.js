import React, { Component } from 'react'

export default (Comp) => {
  return class extends Component {

    changeTitle(title) {
      return title + ' world'
    }

    render() {
      return (
        <Comp changeTitle={this.changeTitle}></Comp>
      )
    }
  }
}