import React from 'react'
import ReactDOM from 'react-dom'

import Header from './pages/Header'
import Footer from './pages/Footer'
import Nav from './pages/Nav'

ReactDOM.render(
  <>
    <Nav></Nav>
    <Header></Header>
    <Footer></Footer>
  </>,
  document.getElementById('root')
)