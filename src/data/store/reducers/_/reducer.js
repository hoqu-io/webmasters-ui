export default (defaultState, actions) => (state = defaultState, action) => {
  const method = actions[action.type]

  if (method == null) { return state }
  return method(state, action)
}
