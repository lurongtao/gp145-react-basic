import React from 'react'
import ReactDOM from 'react-dom'

// import Header from './pages/Header'
// import Footer from './pages/Footer'
// import Nav from './pages/Nav'

// import TodoList from './pages/todolist/TodoList'
import Parent from './pages/life_times/Parent'

ReactDOM.render(
  <Parent></Parent>,
  document.getElementById('root')
)

setTimeout(() => {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}, 3000)