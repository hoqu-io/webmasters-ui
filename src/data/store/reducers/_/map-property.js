export default (key, map) => (state, { payload }) => ({ ...state, [key]: state[key].map(map.bind(null, payload)) })
