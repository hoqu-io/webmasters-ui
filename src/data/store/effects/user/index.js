import { takeEvery } from 'redux-saga/effects'

import auth from './auth'
import check from './check'
import signIn from './sign-in'
import signOut from './sign-out'
import signUp from './sign-up'
import update from './update'
import uploadAvatar from './upload-avatar'

export default function * () {
  yield takeEvery('*USER.AUTH', auth)
  yield takeEvery('*USER.CHECK', check)
  yield takeEvery('*USER.SIGN-IN', signIn)
  yield takeEvery('*USER.SIGN-OUT', signOut)
  yield takeEvery('*USER.SIGN-UP', signUp)
  yield takeEvery('*USER.UPDATE', update)
  yield takeEvery('*USER.UPLOAD-AVATAR', uploadAvatar)
}
