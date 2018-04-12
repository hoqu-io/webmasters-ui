import { select, call, put } from 'redux-saga/effects'

import { createAd } from 'api/offers'

export default function * () {
  const { offer: { phone, wallet: _wallet, id: offerId }, wallets } = yield select(selector)
  const wallet = _wallet || (wallets[wallets.length - 1] || {}).address

  if (phone == null || wallet == null || offerId == null) { return }

  yield put({ type: 'OFFERS.MERGE-ACTUAL-OFFER', payload: { isAddInProgress: true } })
  const id = yield call(createAd, { phone, beneficiaryAddress: wallet, offer: offerId })
  yield put({ type: 'OFFERS.MERGE-ACTUAL-OFFER', payload: { isAddInProgress: false } })

  if (id == null) { return }

  const { offer } = yield select(selector)
  if (offer.ads == null) { return }
  const ads = offer.ads.map((i) => ({ ...i }))
  ads.unshift({ id, phone, beneficiary_address: wallet })
  yield put({ type: 'OFFERS.MERGE-ACTUAL-OFFER', payload: { ads, phone: '', wallet: null, isAddAdVisible: false } })
}

const selector = ({ offers: { offer }, wallets: { wallets } }) => ({
  offer: offer || { },
  wallets
})
