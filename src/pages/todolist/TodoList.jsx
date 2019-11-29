import React, { Component } from 'react'
import Form from './Form'
import List from './List'

class TodoList extends Component {
  state = {
    keyword: 'abc',
    initValue: '-abc'
  }

  handleReceiveKeyword (keyword) {
    this.setState({
      keyword
    })
  }

  async componentDidMount() {
    await this.setState({
      initValue: '--abc'
    })

    console.log(this.state.initValue)
  }

  render() {
    // console.log(1)
    return (
      <>
        <Form 
          onReceiveKeyword={this.handleReceiveKeyword.bind(this)}
          initValue={this.state.initValue}
        ></Form>
        <List form={<Form />} keyword={this.state.keyword}></List>
      </>
    )
  }
}

export default TodoList