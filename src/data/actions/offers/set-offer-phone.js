export default (dispatch) => (phone) => (dispatch({ type: 'OFFERS.MERGE-ACTUAL-OFFER', payload: { phone } }))
