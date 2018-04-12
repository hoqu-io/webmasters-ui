import { call, put, select } from 'redux-saga/effects'

import { update } from 'api/users'

export default function * () {
  const { inProgress, user } = yield select(selector)
  if (inProgress) { return }
  const _user = {}
  fields.forEach((key) => {
    const formValue = user[`form${key[0].toUpperCase()}${key.substring(1)}`]
    const value = user[key]

    _user[key] = formValue == null ? value : formValue
  })

  yield put({ type: 'USER.MERGE', payload: { inProgress: true } })
  yield call(update, _user)
  yield put({ type: 'USER.MERGE', payload: { ..._user, inProgress: false } })
}

const selector = ({ user: { inProgress, ...user } }) => ({ inProgress, user })

const fields = [ 'firstName', 'lastName', 'country', 'email', 'phone', 'website' ]
