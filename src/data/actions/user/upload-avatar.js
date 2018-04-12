export default (dispatch) => (avatar) => (dispatch({ type: '*USER.UPLOAD-AVATAR', payload: { avatar } }))
