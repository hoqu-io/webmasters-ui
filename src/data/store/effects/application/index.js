import { takeEvery } from 'redux-saga/effects'

import start from './start'
import refresh from './refresh'

export default function * () {
  yield takeEvery('*APPLICATION.START', start)
  yield takeEvery('*APPLICATION.REFRESH', refresh)
}
