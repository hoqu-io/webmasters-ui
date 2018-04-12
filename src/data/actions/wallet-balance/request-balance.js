export default (dispatch) => (wallet) => (
  dispatch({ type: '*BALANCE.REQUEST', payload: { wallet } })
)
