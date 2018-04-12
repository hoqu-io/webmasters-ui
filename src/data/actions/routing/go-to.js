export default (dispatch) => ({ page, params }) => (
  dispatch({ type: '*ROUTING.GOTO', payload: { page, params: params || {} } })
)
