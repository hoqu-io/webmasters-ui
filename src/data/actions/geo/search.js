export default (dispatch) => ({ component, type }, q) => (
  dispatch({ type: '*GEO.SEARCH', payload: { component, q, type } })
)
