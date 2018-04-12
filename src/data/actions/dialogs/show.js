export default (dispatch) => (active, payload = {}) => () => (
  dispatch({ type: 'DIALOGS.MERGE', payload: { active, payload } })
)
