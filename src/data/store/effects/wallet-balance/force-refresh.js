import { call, select, put } from 'redux-saga/effects'

import { balance } from 'api/users/wallets'

export default function * () {
  const { wallets } = yield select(selector)
  const result = yield call(balance, { wallets: Object.keys(wallets) })
  const refreshedWallets = {}
  Object.keys(wallets).forEach(item => {
    refreshedWallets[item] = { balance: result[item], count: wallets[item].count }
  })
  yield put({ type: 'BALANCE.MERGE', payload: { wallets: refreshedWallets } })
}

const selector = ({ walletBalance: { wallets } }) => ({ wallets })
