import uuid from 'uuid'
import { put, select } from 'redux-saga/effects'

export default function * ({ payload: { wallet } }) {
  const { wallets } = yield select(selector)
  yield put({
    type: 'BALANCE.MERGE-WALLETS',
    payload: {
      [wallet]: {
        balance: (wallets[wallet] == null ? 0 : wallets[wallet].balance),
        count: (wallets[wallet] == null ? 1 : wallets[wallet].count + 1)
      }
    }
  })
  yield put({ type: '*BALANCE.FORCE-REFRESH', payload: { } })
  const id = uuid.v4()
  yield put({ type: '*BALANCE.REFRESH', payload: { recursive: id } })
}

const selector = ({ walletBalance: { wallets } }) => ({ wallets })
