exports.show = (payload) => {
  return {
    type: 'show',
    data: payload.data
  }
}