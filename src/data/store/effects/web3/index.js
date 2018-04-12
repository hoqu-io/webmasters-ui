import { takeEvery } from 'redux-saga/effects'

import refresh from './refresh'

export default function * () {
  yield takeEvery('*WEB3.REFRESH', refresh)
}
