export default (dispatch) => (key, value) => dispatch({ type: 'USER.MERGE', payload: { [key]: value } })
