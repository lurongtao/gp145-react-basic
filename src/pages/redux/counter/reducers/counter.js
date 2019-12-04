const defaultState = {
  count: 0
}

// 纯函数
const reducers = (state=defaultState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      }
    case 'loadData':
      console.log(action)
      return {
        count: action.data
      }
    default:
      return state
  }
}

module.exports = reducers