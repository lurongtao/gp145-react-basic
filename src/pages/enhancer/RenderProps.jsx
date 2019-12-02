import React, { Component } from 'react'
import RenderPropsChild from './RenderPropsChild'
export default class RenderProps extends Component {
  render() {
    return (
      <div>
        <RenderPropsChild
          render={
            (item) => {
              return (
                <div style={{color: 'red'}}>{item}</div>
              )
            }
          }
        ></RenderPropsChild>
      </div>
    )
  }
}
