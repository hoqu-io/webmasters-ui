import setValue from './set-value'
import signIn from './sign-in'
import signOut from './sign-out'
import update from './update'
import uploadAvatar from './upload-avatar'

export default (dispatch) => ({
  setValue: setValue(dispatch),
  signIn: signIn(dispatch),
  signOut: signOut(dispatch),
  update: update(dispatch),
  uploadAvatar: uploadAvatar(dispatch)
})
