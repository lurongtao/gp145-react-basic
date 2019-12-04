import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import MovieList from './List'
export default class Movie extends Component {
  render() {
    return (
      <div>
        movie
        <Route
          path="/movie/list"
          component={MovieList}
        />
      </div>
    )
  }
}
