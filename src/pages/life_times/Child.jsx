import React, { PureComponent } from 'react'

export default class Child extends PureComponent {
  constructor() {
    super()
    console.log('constructor')

    this.state = {
      number: 3
    }
  }

  UNSAFE_componentWillMount() {
    console.log('componentWillMount.')
  }

  render() {
    console.log('render')
    return (
      <div>
        parent
      </div>
    )
  }

  componentDidMount() {
    console.log('componentDidMount')

    this.setState({
      number: 3
    })
  }

  UNSAFE_componentWillReceiveProps(props) {
    console.log(props)
  }

  // shouldComponentUpdate(props) {
  //   if (JSON.stringify(this.props.value.x) === JSON.stringify(props.value.x)) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}
