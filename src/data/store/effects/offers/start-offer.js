import { select, call, put } from 'redux-saga/effects'

import { getById, getLeads } from 'api/offers'

export default function * () {
  const { params } = yield select(selector)
  const { id } = params || {}
  if (!id) { return }

  const offer = yield call(getById, { offer: id })
  const leads = yield call(getLeads, id)
  if (offer == null) { return }
  offer.leads = leads

  yield put({ type: 'OFFERS.MERGE', payload: { offer } })
  yield put({ type: '*ROUTING.TITLE', payload: { title: offer.name } })
}

const selector = ({ routing: { params } }) => ({ params })
