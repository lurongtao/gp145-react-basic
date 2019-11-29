import React, { Component } from 'react'

import PropTypes from 'prop-types'

import ListItem from './ListItem'

export default class List extends Component {
  // constructor() {
  //   super()
  // }

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
    list: ['task1', 'task2'],
    show: false,
    title: '<b>hello</b>'
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

  handleShowList = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    })
    // console.log(args)
  }

  render() {
    return (
      <>
        {
          this.state.show
          && (<ul>
            {
              this.state.list.map((value, index) => {
                return (
                  <ListItem 
                    key={value+index} 
                    value={value}
                    onItemClick={this.handleClick.bind(this)}
                    index={index}
                  ></ListItem>
                )
              })
            }
            <li>
              <label htmlFor="abc"></label>
              <span dangerouslySetInnerHTML={{__html: this.state.title}}></span>
            </li>
          </ul>)
        }
        
        <button onClick={this.handleShowList}>showlist</button>
      </>
    )
  }
}