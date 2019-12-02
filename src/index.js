import React from 'react'
import ReactDOM from 'react-dom'

// import Header from './pages/Header'
// import Footer from './pages/Footer'
// import Nav from './pages/Nav'

// import TodoList from './pages/todolist/TodoList'

import {
  MyProvider
} from './pages/context/color_context'
import Parent from './pages/context/Parent'

import Hoc from './pages/hoc/Hoc'

ReactDOM.render(
  <MyProvider>
    <Hoc></Hoc>
  </MyProvider>,
  document.getElementById('root')
)

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// }, 3000)