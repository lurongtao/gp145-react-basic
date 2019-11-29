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

  componentDidMount() {
    this.setState({
      initValue: '-abc'
    })
  }

  render() {
    console.log(1)
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