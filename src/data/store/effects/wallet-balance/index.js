import { takeEvery } from 'redux-saga/effects'

import refresh from './refresh'
import requestBalance from './request-balance'
import removeBalance from './remove-balance'
import forceRefresh from './force-refresh'

export default function * () {
  yield takeEvery('*BALANCE.FORCE-REFRESH', forceRefresh)
  yield takeEvery('*BALANCE.REFRESH', refresh)
  yield takeEvery('*BALANCE.REQUEST', requestBalance)
  yield takeEvery('*BALANCE.REMOVE', removeBalance)
}
