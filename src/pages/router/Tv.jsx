import React, { Component } from 'react'

import TvShow from './TvShow'

export default class Tv extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        tv
        {this.props.children}
      </div>
    )
  }
}

Tv.Show = TvShow