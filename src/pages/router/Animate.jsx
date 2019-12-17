import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import './animation.css'
export default class Animate extends Component {
  state = {
    show: true
  }

  handleClick = () => {
    this.setState((state) => {
      return {
        show: !state.show
      }
    })
  }

  render() {
    return (
      <>
        <CSSTransition
          in={this.state.show}
          timeout={5000}
          appear={true}
          classNames={{
            enter: 'animated',
            enterActive: 'slideInLeft',
            exit: 'animated',
            exitActive: 'slideOutLeft',
          }}
          onEntered={() => {
            console.log('onEntered.')
          }}
          mountOnEnter
          unmountOnExit
        >
          <div>
            animate
          </div>
        </CSSTransition>
        <div>
          <button onClick={this.handleClick}>show/hide</button>
        </div>
      </>
    )
  }
}
