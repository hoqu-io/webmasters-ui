import { takeEvery } from 'redux-saga/effects'

import connect from './connect'
import deleteWallet from './delete'
import rename from './rename'
import start from './start'

export default function * () {
  yield takeEvery('*WALLETS.CONNECT', connect)
  yield takeEvery('*WALLETS.RENAME', rename)
  yield takeEvery('*WALLETS.DELETE', deleteWallet)
  yield takeEvery('*WALLETS.START', start)
}
