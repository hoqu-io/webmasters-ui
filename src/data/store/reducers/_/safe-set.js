export default (key) => (state, { payload: { stateValue, newValue } }) => (
  { ...state, [key]: state[key] === stateValue ? newValue : state[key] }
)
