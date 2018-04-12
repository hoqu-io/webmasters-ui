export default (dispatch) => ({ address, name }) => (dispatch({ type: '*WALLETS.RENAME', payload: { address, name } }))
