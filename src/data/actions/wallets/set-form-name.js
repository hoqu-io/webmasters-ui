export default (dispatch) => (address, formName) => (
  dispatch({ type: 'WALLETS.MERGE-WALLET', payload: { address, wallet: { formName } } })
)
