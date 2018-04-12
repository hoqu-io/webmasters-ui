import { put } from 'redux-saga/effects'

export default function * ({ payload: { params } }) {
  yield put({ type: 'ROUTING.MERGE', payload: { params: params || {} } })
}
