export default (dispatch) => (goTo) => (dispatch({ type: '*MENU.GOTO', payload: { goTo } }))
