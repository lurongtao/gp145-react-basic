import React, { Component, createRef } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.inputRef = createRef()
  }

  state = {
    // keyword: '',
    arr: ['a', 'b']
  }

  handleChange(e) {
    // let value = e.target.value
    // this.setState({
    //   keyword: value,
    //   arr: [
    //     ...this.state.arr,
    //     value
    //   ]
    // })
    // this.state.keyword = e.target.value
    // this.state.arr = ['a', 'b', 'd']

    // this.setState(state => {
    //   return {
    //     keyword: value,
    //     arr: [
    //       ...state.arr,
    //       value
    //     ]
    //   }
    // }, () => {
    //   console.log(this.state.keyword)
    // })
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      let input = this.inputRef.current
      this.props.onReceiveKeyword(input.value)
      input.value = ''
      // this.setState({
      //   keyword: ''
      // })
    }
  }

  render() {
    // console.log(0)
    return (
      <>
        <input
          ref={this.inputRef}
          onKeyUp={this.handleKeyUp.bind(this)}
          type="text"
        />
      </>
    )
  }
}

export default Form