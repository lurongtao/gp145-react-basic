import React, { Component } from 'react'

import { Route, NavLink } from 'react-router-dom'

import MovieList from './List'
export default class Movie extends Component {
  render() {
    let { match } = this.props
    return (
      <div>
        movie
        <NavLink to={{
          pathname:match.url + '/list', 
          state: { id: 2 }
        }}>list</NavLink>
        <Route
          path={match.url + '/list'}
          component={MovieList}
        />
      </div>
    )
  }
}
