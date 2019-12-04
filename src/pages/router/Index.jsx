import React, { Component } from 'react'
import { 
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'

import './router.css'

import Movie from './Movie'
import Tv from './Tv'

export default class Index extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink activeClassName='active' to='/movie'>电影</NavLink></li>
          <li><NavLink activeClassName='active' to='/tv'>电视</NavLink></li>
        </ul>
        <Switch>
          <Route
            path="/tv"
            component={Tv}
          />
          <Route
            path="/movie"
            component={Movie}
          />
          <Redirect
            from="/"
            to="/movie"
          />
        </Switch>
      </div>
    )
  }
}
