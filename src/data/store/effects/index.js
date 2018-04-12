import { fork } from 'redux-saga/effects'

import application from './application'
import dashboard from './dashboard'
import geo from './geo'
import menu from './menu'
import offers from './offers'
import routing from './routing'
import user from './user'
import wallets from './wallets'
import walletBalance from './wallet-balance'
import web3 from './web3'

export default function * () {
  yield fork(application)
  yield fork(dashboard)
  yield fork(geo)
  yield fork(menu)
  yield fork(offers)
  yield fork(routing)
  yield fork(user)
  yield fork(wallets)
  yield fork(walletBalance)
  yield fork(web3)
}
