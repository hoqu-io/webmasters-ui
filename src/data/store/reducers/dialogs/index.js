import { reducer, merge, mergeProperty } from '../_'

/*
 active (string) : active dialog
 payload (any)   : dialog data
 */

const defaultState = {
  active: null,
  payload: null
}

const actions = {
  'DIALOGS.MERGE': merge,
  'DIALOGS.MERGE-PAYLOAD': mergeProperty('payload')
}

export default reducer(defaultState, actions)
