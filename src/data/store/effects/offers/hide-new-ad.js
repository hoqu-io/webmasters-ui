import { select, put } from 'redux-saga/effects'

export default function * () {
  const { offer } = yield select(selector)
  if (offer == null) { return }

  yield put({ type: 'ROUTING.MERGE-PARAMS', payload: { tab: 2 } })
  yield put({ type: 'OFFERS.MERGE', payload: { offer: { ...offer, isAddAdVisible: false } } })
}

const selector = ({ routing: { params }, offers: { offer } }) => ({ id: params ? params.id : null, offer })
