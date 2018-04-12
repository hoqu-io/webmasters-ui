import { put, call } from 'redux-saga/effects'

export default function * () {
  const { width, height } = yield call(waitResize)
  yield put({ type: 'APPLICATION.MERGE', payload: { screenWidth: width, screenHeight: height } })
  yield put({ type: '*APPLICATION.REFRESH', payload: { } })
}

const waitResize = () => new Promise((resolve) => {
  const handler = () => {
    setTimeout(() => (resolve({ width: window.innerWidth, height: window.innerHeight })), DEBOUNCE)
    window.removeEventListener('resize', handler)
  }
  window.addEventListener('resize', handler)
})

const DEBOUNCE = 250
