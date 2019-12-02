import React, { Component } from 'react'

export default class Child extends Component {
  constructor() {
    super()
    console.log('constructor')

    this.state = {
      number: 3
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.isShow !== props.isShow) {
      console.log(0)
      return {
        isShow: props.isShow
      }
    }
    return null
  }

  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount.')
  // }

  handleClick = () => {
    this.props.onReceive('hello')
  }

  render() {
    // console.log('render')
    let { title } = this.props
    return (
      <div>
        {title}
        <button onClick={this.handleClick}>send message</button>
      </div>
    )
  }

  async componentDidMount() {
    console.log('child componentDidMount')
    
    this.setState({
      number: 2,
      isShow: 9
    })

    setTimeout(() => {
      this.forceUpdate()
    }, 0)

    // console.log(this.state)
  }

  // UNSAFE_componentWillReceiveProps(props) {
  //   console.log(0)
  //   console.log(props)
  // }

  // shouldComponentUpdate(props) {
  //   if (JSON.stringify(this.props.value.x) === JSON.stringify(props.value.x)) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  // UNSAFE_componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }

  getSnapshotBeforeUpdate() {
    return 99
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot)
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}
