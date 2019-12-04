const { combineReducers } = require('redux')
const counter = require('./reducers/counter')
const show = require('./reducers/show')

const reducers = combineReducers({
  counter,
  show
})

module.exports = reducers