import { reducer, toggle } from '../_'

/*
 languagesMenu (boolean) : languages menu visible
 accountMenu (boolean)   : account menu visible
 */

const defaultState = {
  languagesMenu: false,
  accountMenu: false
}

const actions = {
  'APPBAR.TOGGLE-LANGUAGES-MENU': toggle('languagesMenu'),
  'APPBAR.TOGGLE-ACCOUNT-MENU': toggle('accountMenu')
}

export default reducer(defaultState, actions)
