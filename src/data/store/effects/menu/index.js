import { takeEvery } from 'redux-saga/effects'

import goTo from './goto'

export default function * () {
  yield takeEvery('*MENU.GOTO', goTo)
}
