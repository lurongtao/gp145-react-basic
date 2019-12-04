const defaultState = {
  message: ''
}

// 纯函数
const reducers = (state=defaultState, action) => {
  switch (action.type) {
    case 'show':
      return {
        message: action.data
      }
    default:
      return state
  }
}

module.exports = reducers