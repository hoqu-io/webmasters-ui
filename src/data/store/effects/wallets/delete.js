import { call, select, put } from 'redux-saga/effects'
import { remove } from 'api/users/wallets'

export default function * () {
  const { wallet } = yield select(selector)
  const { address } = wallet || {}
  if (wallet == null) { return }

  yield put({ type: 'WALLETS.MERGE-WALLET', payload: { address, wallet: { inProgress: true } } })

  try {
    yield call(remove, { address })
  } catch (e) {
  }

  yield put({ type: 'WALLETS.MERGE', payload: { editableWallet: null } })
  yield put({ type: 'WALLETS.DELETE', payload: { address } })
}

const selector = ({ wallets: { wallets, editableWallet } }) => ({
  wallet: wallets.find(({ address }) => (address === editableWallet))
})
