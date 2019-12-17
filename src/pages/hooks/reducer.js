const defaultInit = {
  count: 0
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return {
        count: state.count + 1
      }
    default:
      console.log(0)
      throw new Error('发生错误')
  }
}


export {
  defaultInit,
  reducer
}
