import { takeEvery } from 'redux-saga/effects'

import createAd from './create-ad'
import hideNewAd from './hide-new-ad'
import saveAd from './save-ad'
import startOffer from './start-offer'
import start from './start'

export default function * () {
  yield takeEvery('*OFFERS.CREATE-AD', createAd)
  yield takeEvery('*OFFERS.HIDE-NEW-AD', hideNewAd)
  yield takeEvery('*OFFERS.SAVE-AD', saveAd)
  yield takeEvery('*OFFERS.START-OFFER', startOffer)
  yield takeEvery('*OFFERS.START', start)
}
