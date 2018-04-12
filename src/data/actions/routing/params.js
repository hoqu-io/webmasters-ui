export default (dispatch) => (params) => (
  dispatch({ type: 'ROUTING.MERGE-PARAMS', payload: params || {} })
)
