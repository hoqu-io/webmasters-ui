import { call, put } from 'redux-saga/effects'

import { list } from 'api/offers'

export default function * () {
  yield put({ type: 'OFFERS.MERGE', payload: { isReady: false } })
  const offers = yield call(list)
  yield put({ type: 'OFFERS.MERGE', payload: { list: offers, isReady: true } })
}
