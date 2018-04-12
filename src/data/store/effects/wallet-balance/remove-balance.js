import { put, select } from 'redux-saga/effects'

export default function * ({ payload: { wallet } }) {
  const { wallets } = yield select(selector)
  wallets[wallet].count > 1 ? (
    yield put({
      type: 'BALANCE.MERGE-WALLETS',
      payload: {
        [wallet]: {
          balance: wallets[wallet].balance,
          count: wallets[wallet].count - 1
        }
      }
    })
  ) : (
    yield put({ type: 'BALANCE.DELETE-WALLET', payload: { wallet } })
  )
}

const selector = ({ walletBalance: { wallets } }) => ({ wallets })
