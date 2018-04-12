/* global localStorage */
import { select, put } from 'redux-saga/effects'

export default function * () {
  const token = localStorage.getItem('token')
  const { page } = yield select(selector)

  if (token == null && page !== 'sign-in') {
    yield put({ type: 'ROUTING.MERGE', payload: { page: 'sign-in' } })
    return
  }

  if (token != null && page === 'sign-in') {
    yield put({ type: 'ROUTING.MERGE', payload: { page: '' } })
  }
}

const selector = ({ routing: { page } }) => ({ page })
