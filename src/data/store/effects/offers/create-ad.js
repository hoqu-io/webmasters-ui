import { select, put } from 'redux-saga/effects'

export default function * () {
  const { offer } = yield select(selector)
  if (offer == null) { return }

  yield put({ type: 'ROUTING.MERGE-PARAMS', payload: { tab: 'programs' } })
  yield put({ type: 'OFFERS.MERGE', payload: { offer: { ...offer, isAddAdVisible: true } } })
}

const selector = ({ routing: { params }, offers: { offer } }) => ({ id: params ? params.id : null, offer })
