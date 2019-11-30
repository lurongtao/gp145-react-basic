import React, { Component } from 'react'

import Child from './Child'

export default class Parent extends Component {
  state = {
    datalist: ['a', 'b'],
    isShow: true,
    value: {
      x: {
        y: 0
      }
    }
  }

  render() {
    return (
      <Child isShow={this.state.isShow}></Child>
    )
  }

  componentDidMount() {
    console.log('parent componentDidMount')
    // this.state.datalist.push('c')
    // this.setState({
    //   value: {
    //     x: {
    //       y: 0
    //     }
    //   }
    // })
    setTimeout(() => {
      this.setState({
        isShow: false
      })
    }, 0)
  }
}
