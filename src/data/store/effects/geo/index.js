import { takeEvery } from 'redux-saga/effects'

import getCountry from './get-country'
import search from './search'

export default function * () {
  yield takeEvery('*GEO.GET-COUNTRY', getCountry)
  yield takeEvery('*GEO.SEARCH', search)
}
