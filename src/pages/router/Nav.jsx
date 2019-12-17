import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

class Nav extends Component {
  state = {
    navList: [
      {
        id: '001',
        title: '电影',
        path: '/movie'
      },
      {
        id: '002',
        title: '电视',
        path: '/Tv'
      }
    ]
  }

  handleClick = (path) => {
    return () => {
      this.props.history.push(path)
    }
  }

  render() {
    console.log(this.props)
    return (
      <>
        {
          this.state.navList.map((value) => (
            <Route
              key={value.id}
              path={value.path}
              children={props => {
                return (
                  <li
                    className={props.match ? 'active' : ''}
                    onClick={this.handleClick(value.path)}
                  >{value.title}</li>
                )
              }}
            ></Route>
          ))
        }
      </>
    )
  }
}

export default withRouter(Nav)