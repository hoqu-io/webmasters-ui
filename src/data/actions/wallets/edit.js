export default (dispatch) => (editableWallet) => (dispatch({ type: 'WALLETS.MERGE', payload: { editableWallet } }))
