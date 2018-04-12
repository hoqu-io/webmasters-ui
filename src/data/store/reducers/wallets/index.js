import { mapProperty, reducer, merge, toggle, unshift, filter } from '../_'

/*
 isReady    (boolean)               : is page ready
 wallets    ([ { name, address } ]) : wallets list
 editableWallet (string)            : editable wallet
 isConnectInProgress (boolean)      : is connect in progress
 newVisible (boolean)               : newWallet card visible
 newName    (string)                : newWallet name
 */

const defaultState = {
  isReady: false,
  wallets: [],
  editableWallet: null,
  isConnectInProgress: false,
  newVisible: false,
  newName: ''
}

const actions = {
  'WALLETS.MERGE': merge,
  'WALLETS.MERGE-WALLET': mapProperty(
    'wallets',
    ({ address, wallet }, item) => ({ ...item, ...(address === item.address ? wallet : {}) })
  ),
  'WALLETS.TOGGLE-NEW': toggle('newVisible'),
  'WALLETS.APPEND': unshift('wallets'),
  'WALLETS.DELETE': filter(
    'wallets',
    ({ address }, { address: itemAddress }) => (address !== itemAddress)
  )
}

export default reducer(defaultState, actions)
