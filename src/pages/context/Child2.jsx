import React, { Component } from 'react'

import ChildHood from './ChildHood'

import { MyConsumer } from '../context/color_context'

export default class Child2 extends Component {
  render() {
    return (
      <MyConsumer>
        {
          value => (
            <div style={{color: value.color}}>
              <div>子组件2</div>
              <ChildHood></ChildHood>
            </div>
          )
        }
      </MyConsumer>
    )
  }
}
