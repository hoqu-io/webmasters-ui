export default (dispatch) => (group) => (dispatch({ type: 'MENU.MERGE', payload: { group } }))
