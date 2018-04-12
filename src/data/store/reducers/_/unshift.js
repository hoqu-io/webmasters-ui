export default (key) => (state, { payload }) => ({ ...state, [key]: [ { ...payload } ].concat(state[key] || []) })
