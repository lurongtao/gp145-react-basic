import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch({
      type: 'increment'
    })
  }
})

class Counter extends Component {
  increment = () => {
    this.props.increment()
  }

  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)