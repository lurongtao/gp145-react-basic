import React, { Component } from 'react'

// import hoc from './hoc'

import Header from './Header'

class Hoc extends Component {
  state = {
    title: 'hello'
  }

  handleClick = () => {
    this.setState({
      title: 'hello'
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Header title={this.state.title}></Header>
        <button onClick={this.handleClick}>change title</button>
      </div>
    )
  }
}

export default Hoc
