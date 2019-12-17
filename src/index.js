import React from 'react'
import ReactDOM from 'react-dom'

// import Header from './pages/Header'
// import Footer from './pages/Footer'
// import Nav from './pages/Nav'

// import TodoList from './pages/todolist/TodoList'

// import ComposeApply from './pages/enhancer/ComposeApply'

// import Hoc from './pages/enhancer/Hoc.jsx'

// import RenderProps from './pages/enhancer/RenderProps'

// import Counter from './pages/counter/Counter'

// import { Provider } from 'react-redux'

// import Counter1 from './pages/counter/Counter1'

// import {
//   MyProvider
// } from './pages/context/color_context'
// import Parent from './pages/context/Parent'

// import Hoc from './pages/hoc/Hoc'

// import storeContext from './pages/context/store_context'

// import store from './pages/redux/counter/store'

import { BrowserRouter as Router } from 'react-router-dom'

// import Index from './pages/router/Index'
// import Animate from './pages/router/Animate'
import Counter from './pages/hooks/Counter'

ReactDOM.render(
  <Router>
    <Counter></Counter>
  </Router>,
  document.getElementById('root')
)


// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// }, 3000)