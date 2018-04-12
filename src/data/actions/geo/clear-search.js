export default (dispatch) => ({ component }) => (
  dispatch({ type: 'GEO.MERGE-SEARCHES', payload: { [component]: { q: null, result: [] } } })
)
