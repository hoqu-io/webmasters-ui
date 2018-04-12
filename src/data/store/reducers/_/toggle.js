export default (key) => (state) => ({ ...state, [key]: !state[key] })
