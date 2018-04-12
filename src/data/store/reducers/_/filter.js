export default (key, filter) => (state, { payload }) => ({
  ...state,
  [key]: state[key].filter(filter.bind(null, payload))
})
