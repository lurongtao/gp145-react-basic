const myMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log(action)
    }
  }
}

module.exports = myMiddleware