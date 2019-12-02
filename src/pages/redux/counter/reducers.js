const defaultState = {
  counter: 0
}

export default (state=defaultState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      }
    default:
      return state
  }
}