export default (key) => (state, { payload }) => ({ ...state, [key]: { ...(state[key] || {}), ...payload } })
