import { select, put } from 'redux-saga/effects'

export default function * ({ payload: { hookType } }) {
  const { page } = yield select(selector)
  const type = (HOOKS[page || ''] || {})[hookType]
  yield put({ type: '*ROUTING.TITLE', payload: {} })
  if (type == null) { return }
  const actions = Array.isArray(type) ? type : [ type ]

  while (actions.length > 0) { yield put({ type: actions.shift(), payload: {} }) }
}

const selector = ({ routing: { page } }) => ({ page })

const HOOKS = {
  '': {
    start: [ '*USER.CHECK', '*DASHBOARD.START' ],
    goto: [ '*USER.CHECK', '*DASHBOARD.START' ]
  },
  dashboard: {
    start: [ '*USER.CHECK', '*DASHBOARD.START' ],
    goto: [ '*USER.CHECK', '*DASHBOARD.START' ]
  },
  offers: {
    start: [ '*USER.CHECK', '*OFFERS.START' ],
    goto: [ '*USER.CHECK', '*OFFERS.START' ]
  },
  offer: {
    start: [ '*USER.CHECK', '*WALLETS.START', '*OFFERS.START-OFFER' ],
    goto: [ '*USER.CHECK', '*WALLETS.START', '*OFFERS.START-OFFER' ]
  },
  wallets: {
    start: [ '*USER.CHECK', '*WALLETS.START' ],
    goto: [ '*USER.CHECK', '*WALLETS.START' ]
  },
  'sign-in': {
    start: [ '*USER.CHECK', '*WEB3.REFRESH' ],
    goto: [ '*USER.CHECK', '*WEB3.REFRESH' ]
  }
}
