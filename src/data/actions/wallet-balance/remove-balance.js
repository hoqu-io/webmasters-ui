export default (dispatch) => (wallet) => (
  dispatch({ type: '*BALANCE.REMOVE', payload: { wallet } })
)
