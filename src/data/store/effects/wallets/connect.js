import { call, select, put } from 'redux-saga/effects'
import { startChallenge } from 'api/users/auth'
import { connect } from 'api/users/wallets'
import { solve } from 'web3'

export default function * () {
  const { isConnectInProgress, newName, account } = yield select(selector)
  if (isConnectInProgress) { return }
  let close = false

  yield put({ type: 'WALLETS.MERGE', payload: { isConnectInProgress: true } })
  try {
    const challenge = yield call(startChallenge, { address: account })
    const decision = yield call(solve, { challenge, account })

    if (decision) {
      const newWallet = yield call(connect, {name: newName, address: account, challenge, decision})
      close = newWallet != null

      if (newWallet) { yield put({type: 'WALLETS.APPEND', payload: newWallet}) }
    }
  } catch (e) {

  }

  yield put({
    type: 'WALLETS.MERGE',
    payload: { isConnectInProgress: false, newName: '', newVisible: !close }
  })
}

const selector = ({
  wallets: { isConnectInProgress, newName },
  web3: { account }
}) => ({
  isConnectInProgress,
  newName,
  account
})
