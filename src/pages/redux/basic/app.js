const { 
  createStore,
  applyMiddleware,
  bindActionCreators
} = require('redux')

// const thunk = require('redux-thunk').default

// const middleware = require('./middleware')
// const myMiddleware = require('./myMiddleware')

// const createSagaMiddleware =  require('redux-saga').default
// const sagaMiddleware = createSagaMiddleware()

// const mySaga = require('./mySaga')

const promiseMiddleware = require('redux-promise').default

const reducers = require('./reducer')

const store = createStore(reducers, applyMiddleware(promiseMiddleware))

// sagaMiddleware.run(mySaga)

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

// const fun = () => {
//   return new Promise((res) => {
//     res({
//       type: 'loadData',
//       data: 0
//     })
//   })
// }

// store.dispatch(
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         type: 'loadData',
//         data: 100000
//       })
//     }, 5000)
//   })
// )

const { show } = require('./action_creators/show')
const counterCreators = require('./action_creators/counter')

// console.log(counterCreators)

// store.dispatch(show({
//   data: 'hello'
// }))

// store.dispatch(increment())

const bac = bindActionCreators(counterCreators, store.dispatch)

console.log(bac)

