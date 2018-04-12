import { takeEvery } from 'redux-saga/effects'

import goTo from './go-to'
import params from './params'
import hook from './hook'
import title from './title'

export default function * () {
  yield takeEvery('*ROUTING.HOOK', hook)
  yield takeEvery('*ROUTING.GOTO', goTo)
  yield takeEvery('*ROUTING.PARAMS', params)
  yield takeEvery('*ROUTING.TITLE', title)
}
