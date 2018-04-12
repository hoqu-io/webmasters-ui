import { reducer, merge } from '../_'

/*
 state   (string)  : web3 state
   "loading"       - start value
   "not installed" - web3 not available
   "ready"         - web3 and account is available
   "locked"        - web3 is available without account
 account (string)  : MetaMask account
 refresh (boolean) : page need web3 data
 */

const defaultState = {
  state: 'loading',
  account: null,
  refresh: false
}

const actions = {
  'WEB3.MERGE': merge
}

export default reducer(defaultState, actions)
