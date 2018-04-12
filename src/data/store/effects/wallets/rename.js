import { call, select, put } from 'redux-saga/effects'
import { rename } from 'api/users/wallets'

export default function * () {
  const { wallet } = yield select(selector)
  const { address, formName, name } = wallet || {}
  if (wallet == null || formName == null || formName === name) { return }

  yield put({ type: 'WALLETS.MERGE-WALLET', payload: { address, wallet: { inProgress: true } } })

  try {
    yield call(rename, { address, name: formName })
  } catch (e) {
  }

  yield put({ type: 'WALLETS.MERGE', payload: { editableWallet: null } })
  yield put({
    type: 'WALLETS.MERGE-WALLET',
    payload: { address, wallet: { inProgress: false, formName: null, name: formName } }
  })
}

const selector = ({ wallets: { wallets, editableWallet } }) => ({
  wallet: wallets.find(({ address }) => (address === editableWallet))
})
