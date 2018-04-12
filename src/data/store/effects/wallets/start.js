import { call, put } from 'redux-saga/effects'
import { list } from 'api/users/wallets'

export default function * () {
  // Set end hook
  yield put({ type: 'ROUTING.MERGE', payload: { endHook: { type: 'WEB3.MERGE', payload: { refresh: false } } } })

  // Start web3

  // Set data
  yield put({ type: 'WALLETS.MERGE', payload: { web3: true, isReady: false } })

  // Load wallets
  const wallets = yield call(list)
  yield put({ type: 'WALLETS.MERGE', payload: { wallets: wallets || [], isReady: true } })

  // Start web3
  yield put({ type: '*WEB3.REFRESH', payload: { recursive: true } })
}
