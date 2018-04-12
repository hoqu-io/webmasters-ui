import { call, select, put } from 'redux-saga/effects'

import { balance } from 'api/users/wallets'

export default function * ({ payload: { recursive } }) {
  yield wait(60000)
  yield put({ type: 'BALANCE.SAFE-SET-HANDLER', payload: { stateValue: '', newValue: recursive } })
  const { wallets, handler } = yield select(selector)
  if (recursive !== handler) { return }
  if (Object.keys(wallets).length > 0) {
    const result = yield call(balance, { wallets: Object.keys(wallets) })
    const refreshedWallets = {}
    Object.keys(wallets).forEach(item => {
      refreshedWallets[item] = { balance: result[item], count: wallets[item].count }
    })
    yield put({ type: 'BALANCE.MERGE', payload: { wallets: refreshedWallets } })
    yield put({ type: '*BALANCE.REFRESH', payload: { recursive } })
    return
  }
  yield put({ type: '*BALANCE.REFRESH', payload: { recursive: '' } })
  yield put({ type: 'BALANCE.SAFE-SET-HANDLER', payload: { stateValue: handler, newValue: '' } })
}

const selector = ({ walletBalance: { wallets, handler } }) => ({ wallets, handler })
const wait = (delay) => (new Promise((resolve) => (setTimeout(resolve, delay))))
