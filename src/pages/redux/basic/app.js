const { createStore } = require('redux')

const defaultState = {
  counter: 0
}
// 纯函数
const reducers = (state=defaultState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      }
    default:
      return state
  }
}

const store = createStore(reducers)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'increment'
})

store.dispatch({
  type: 'increment'
})