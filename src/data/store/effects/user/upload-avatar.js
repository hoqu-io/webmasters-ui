import { call, put } from 'redux-saga/effects'

import { upload } from 'api/storage'
import { update } from 'api/users'

export default function * ({ payload: { avatar } }) {
  if (avatar == null || avatar === '') { return }

  yield put({ type: 'USER.MERGE', payload: { inProgress: true } })
  const result = yield call(upload, avatar)
  yield call(update, { avatar: `http://api.hoqu.io${result}` })
  yield put({ type: 'USER.MERGE', payload: { avatar: `http://api.hoqu.io${result}`, inProgress: false } })
}
