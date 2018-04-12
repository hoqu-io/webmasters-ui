import { takeEvery } from 'redux-saga/effects'

import start from './start'

export default function * () {
  yield takeEvery('*DASHBOARD.START', start)
}
