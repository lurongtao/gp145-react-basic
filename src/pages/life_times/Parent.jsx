import React, { Component } from 'react'

import ChildHood from './ChildHood'

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
      <ChildHood></ChildHood>
    )
  }

  componentDidMount() {
    // console.log('parent componentDidMount')
    // this.state.datalist.push('c')
    // this.setState({
    //   value: {
    //     x: {
    //       y: 0
    //     }
    //   }
    // })
    // setTimeout(() => {
    //   this.setState({
    //     isShow: false
    //   })
    // }, 0)
  }
}
