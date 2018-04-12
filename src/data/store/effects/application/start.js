/* global localStorage */

import { select, put } from 'redux-saga/effects'

export default function * () {
  const { web3 } = yield select(selector)
  const token = localStorage.getItem('token')
  let action = null
  yield put({ type: '*USER.CHECK', payload: { hookType: 'start' } })

  // User exist
  if (token != null) {
    action = { type: '*USER.AUTH', payload: { } }
  }

  // Web3 not available
  if (!web3 && action == null) { action = { type: 'ROUTING.MERGE', payload: { page: 'sign-in', params: { } } } }

  if (action) { yield put(action) }
  yield put({ type: 'APPLICATION.MERGE', payload: { isReady: true } })
  yield put({ type: '*ROUTING.HOOK', payload: { hookType: 'start' } })
  yield put({ type: '*APPLICATION.REFRESH', payload: { recursive: true } })
}

const selector = ({ application: { web3 } }) => ({ web3 })
