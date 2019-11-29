import React, { Component } from 'react'

import PropTypes from 'prop-types'

import ListItem from './ListItem'

export default class List extends Component {
  static defaultProps = {
    keyword: ''
  }

  static propTypes = {
    // keyword: function(props, propName, componentName) {
    //   if (props.keyword !== 'abc') {
    //     return new Error()
    //   }
    // }
    keyword: PropTypes.string.isRequired,
    // form: PropTypes.elementType
  }

  state = {
    list: ['task1', 'task2']
  }

  handleClick(index) {
    this.state.list.splice(index, 1)
    this.setState({})
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      list: [
        ...this.state.list,
        props.keyword
      ]
    })
  }

  render() {
    return (
      <ul>
        {
          this.state.list.map((value, index) => {
            return (
              <ListItem 
                key={value+index} value={value}
                onItemClick={this.handleClick.bind(this)}
                index={index}
              ></ListItem>
            )
          })
        }
        {/* <li>
          {this.props.children}
        </li> */}
      </ul>
    )
  }
}