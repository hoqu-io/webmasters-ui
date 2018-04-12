export default (dispatch) => (id) => (dispatch({ type: '*GEO.GET-COUNTRY', payload: { id } }))
