const { 
  createStore,
  applyMiddleware
} = require('redux')

// const thunk = require('redux-thunk').default

// const middleware = require('./middleware')
// const myMiddleware = require('./myMiddleware')

const createSagaMiddleware =  require('redux-saga')
const sagaMiddleware = createSagaMiddleware()

const reducers = require('./reducer')

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch(dispatch => {
//   setTimeout(() => {
//     dispatch({
//       type: 'loadData',
//       data: 100
//     })
//   }, 5000)
// })

store.dispatch({
  type: 'loadData'
})