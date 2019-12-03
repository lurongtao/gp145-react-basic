function createThunkMiddleware(extraArgument) {
  // return ({ dispatch, getState }) => (next) => (action) => {
  //   if (typeof action === 'function') {
  //     return action(dispatch, getState, extraArgument);
  //   }

  //   return next(action);
  // };

  return function({ dispatch, getState }) {
    return function(next) {
      return function(action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument)
        }
        return next(action)
      }
    }
  }
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

module.exports = thunk;