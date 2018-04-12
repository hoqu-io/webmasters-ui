export default (dispatch) => (wallet) => (dispatch({ type: 'OFFERS.MERGE-ACTUAL-OFFER', payload: { wallet } }))
