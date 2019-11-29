import React, { Component } from 'react'

class Form extends Component {
  state = {
    keyword: '',
    arr: ['a', 'b']
  }

  handleChange(e) {
    let value = e.target.value
    // this.setState({
    //   keyword: value,
    //   arr: [
    //     ...this.state.arr,
    //     value
    //   ]
    // })
    // this.state.keyword = e.target.value
    // this.state.arr = ['a', 'b', 'd']

    this.setState(state => {
      return {
        keyword: value,
        arr: [
          ...state.arr,
          value
        ]
      }
    }, () => {
      console.log(this.state.keyword)
    })
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.props.onReceiveKeyword(this.state.keyword)
      this.setState({
        keyword: ''
      })
    }
  }

  render() {
    console.log(0)
    return (
      <>
        <input 
          value={this.state.keyword} 
          onChange={this.handleChange.bind(this)} 
          onKeyUp={this.handleKeyUp.bind(this)}
          type="text"
        />
        {
          this.state.arr.map((value, index) => {
            return <span key={value+index}>{value}</span>
          })
        }
        {
          this.props.initValue
        }
      </>
    )
  }
}

export default Form