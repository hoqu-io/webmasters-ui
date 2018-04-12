import { call, select, put } from 'redux-saga/effects'

export default function * ({ payload: { recursive } }) {
  if (recursive) { yield put({ type: 'WEB3.MERGE', payload: { refresh: true } }) }

  const enable = yield call(isWeb3Enable)
  if (!enable) {
    yield put({ type: 'WEB3.MERGE', payload: { state: 'not installed' } })
    return
  }

  const account = yield call(getWeb3Account)
  yield put({ type: 'WEB3.MERGE', payload: { state: account ? 'ready' : 'locked', account } })

  yield wait(500)
  const { refresh } = yield select(selector)
  if (!refresh) { return }

  yield put({ type: '*WEB3.REFRESH', payload: { } })
}

const selector = ({ web3: { refresh } }) => ({ refresh })

const wait = (delay) => (new Promise((resolve) => (setTimeout(resolve, delay))))
const isWeb3Enable = () => (window.web3 != null && window.Web3 != null)
const getWeb3Account = () => (window.web3 ? window.web3.eth.accounts[0] : null)
