import { put } from 'redux-saga/effects'

export default function * ({ payload: { goTo: { page, params } } }) {
  yield put({ type: '*ROUTING.GOTO', payload: { page: page || '', params: params || {} } })
  yield wait(1)
  yield put({ type: 'MENU.TOGGLE', payload: { } })
}

const wait = (delay) => (new Promise((resolve) => (setTimeout(resolve, delay))))
