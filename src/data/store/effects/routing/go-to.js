import { select, put } from 'redux-saga/effects'

export default function * ({ payload: { page, params } }) {
  const { page: _page, endHook } = yield select(selector)

  yield put({ type: 'ROUTING.MERGE', payload: { page: page || '', params: params || {}, endHook: null } })
  if (endHook) { yield put(endHook) }
  if (_page !== (page || '')) { yield put({ type: '*ROUTING.HOOK', payload: { hookType: 'goto' } }) }
}

const selector = ({ routing: { page, endHook } }) => ({ page, endHook })
