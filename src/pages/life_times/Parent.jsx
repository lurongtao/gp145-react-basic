import React, { Component } from 'react'

// import ChildHood from './ChildHood'
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

  handleReceive = (msg) => {
    console.log(msg)
  }

  render() {
    return (
      <Child 
        title="line 1"
        onReceive={this.handleReceive}
      ></Child>
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
