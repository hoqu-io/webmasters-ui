export default (dispatch) => (language) => (dispatch({ type: 'APPLICATION.MERGE', payload: { language } }))
