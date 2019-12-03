import { takeEvery, put } from 'redux-saga/effects'

module.exports = function * () {
  yield takeEvery('loadData', function * () {
    let result = yield new Promise((resolve) => {
      setTimeout(() => {
        resolve(1000000)
      }, 5000)
    })

    put('loadData', { data: result })
  })
}