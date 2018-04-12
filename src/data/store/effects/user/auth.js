import { call, put } from 'redux-saga/effects'

import { getByToken } from 'api/users/auth'

export default function * () {
  const result = yield call(getByToken)
  if (result == null) {
    yield put({ type: 'USER.SIGN-OUT', payload: { } })
    return
  }

  yield put({
    type: 'USER.MERGE',
    payload: {
      ...result,
      firstName: result.firstname,
      lastName: result.lastname,
      isReady: true
    }
  })
}
