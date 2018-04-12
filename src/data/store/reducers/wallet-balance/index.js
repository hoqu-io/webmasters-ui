import { filterObject, reducer, mergeProperty, merge, safeSet } from '../_'

/*
handler (string): is fetching balance on. '' if not, uuid of refresher if yes
wallets (object) : object like {
  wallet_id1: {
    balance: 65536,
    count: 404
  },
  wallet_id2: {
    balance: 80085,
    count: 228
  }
}
*/

const defaultState = {
  handler: '',
  wallets: { }
}

const actions = {
  'BALANCE.MERGE': merge,
  'BALANCE.SAFE-SET-HANDLER': safeSet('handler'),
  'BALANCE.MERGE-WALLETS': mergeProperty('wallets'),
  'BALANCE.DELETE-WALLET': filterObject('wallets', ({ wallet }, { key }) => (key !== wallet))
}

export default reducer(defaultState, actions)
