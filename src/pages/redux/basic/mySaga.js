const { takeEvery, put } = require('redux-saga/effects')

module.exports = function * () {
  yield takeEvery('willLoadData', function * () {
    let result = yield new Promise((resolve) => {
      setTimeout(() => {
        resolve(1000000)
      }, 5000)
    })

    yield put({type: 'loadData', data: result })
  })
}