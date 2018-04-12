export default (dispatch) => (newName) => (dispatch({ type: 'WALLETS.MERGE', payload: { newName } }))
