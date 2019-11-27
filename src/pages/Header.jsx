import { Component, createElement } from 'react'

import './header.css'

class Header extends Component {
  render() {
    return (
      createElement(
        'div',
        {
          id: 'myDiv',
          style: { fontSize: '100px' },
          className: 'title'
        },
        'header'
      )
    )
  }
}

export default Header