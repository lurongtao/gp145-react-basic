import React, { Component } from 'react'
import { 
  Route,
  Switch,
  Redirect,
  withRouter,
  NavLink
} from 'react-router-dom'

import './router.css'

import Movie from './Movie'
import Tv from './Tv'
import Page404 from './Page404'
import Nav from './Nav'
import Memo from './Memo'

export default class Index extends Component {
  state = {
    title: 'hello'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: 'hello'
      })
    }, 5000)
  }

  render() {
    return (
      <div>
        <Tv>
          <Tv.Show></Tv.Show>
        </Tv>
        <Memo title={this.state.title}></Memo>
        <ul>
          <Nav></Nav>
        </ul>
        <Switch>
          <Route
            path="/movie"
            component={Movie}
          />
          <Redirect
            exact
            from="/"
            to="/movie"
          />
          <Route
            path="*"
            component={Page404}
          />
        </Switch>
      </div>
    )
  }
}
