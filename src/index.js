import React from 'react'
import ReactDOM from 'react-dom'

// import Header from './pages/Header'
// import Footer from './pages/Footer'
// import Nav from './pages/Nav'

// import TodoList from './pages/todolist/TodoList'

// import ComposeApply from './pages/enhancer/ComposeApply'

// import Hoc from './pages/enhancer/Hoc.jsx'

// import RenderProps from './pages/enhancer/RenderProps'

import Counter from './pages/counter/Counter'
import Counter1 from './pages/counter/Counter1'

// import {
//   MyProvider
// } from './pages/context/color_context'
// import Parent from './pages/context/Parent'

// import Hoc from './pages/hoc/Hoc'

import storeContext from './pages/context/store_context'
import store from './pages/redux/counter/store'

ReactDOM.render(
  <storeContext.Provider value={store}>
    <Counter></Counter>
    <Counter1></Counter1>
  </storeContext.Provider>,
  document.getElementById('root')
)

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// }, 3000)