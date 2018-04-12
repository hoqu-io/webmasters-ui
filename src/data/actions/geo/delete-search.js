export default (dispatch) => (component) => (dispatch({ type: 'GEO.DELETE-SEARCH', payload: { component } }))
