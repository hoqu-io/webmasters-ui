export default (key, filter) => (state, { payload }) => {
  return {
    ...state,
    [key]: state[key] == null ? null : Object.keys(state[key])
      .filter((k) => (filter(payload, { key: k, value: state[key][k] })))
      .reduce((agg, k, index, array) => {
        agg[k] = state[key][k]
        return agg
      }, {})
  }
}
