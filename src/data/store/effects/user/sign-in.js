import { call, put } from 'redux-saga/effects'

import { startChallenge, signIn } from 'api/users/auth'
import { solve } from 'web3'

export default function * () {
  const instance = new window.Web3(window.web3.currentProvider)
  const account = instance.eth.accounts[0]

  if (account == null) {
    yield put({ type: 'ROUTING.MERGE', payload: { page: 'sign-in', params: { } } })
    return
  }

  const challenge = yield call(startChallenge, { address: account })
  const decision = yield call(solve, { challenge, account })
  const user = yield call(signIn, { challenge, decision })

  if (user == null || user.id == null) {
    yield put({ type: '*USER.SIGN-UP', payload: { account, user } })
    return
  }
  yield put({ type: '*USER.CHECK', payload: { hookType: 'start' } })
  yield put({ type: '*USER.AUTH', payload: { } })
}
