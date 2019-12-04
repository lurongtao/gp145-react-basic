const { 
  createStore
} = require('redux')

const reducers = require('./reducer')

const store = createStore(reducers)

module.exports = store