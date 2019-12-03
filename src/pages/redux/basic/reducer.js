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
    case 'loadData':
      return {
        counter: action.data
      }
    default:
      return state
  }
}

module.exports = reducers