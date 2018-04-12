import { reducer, merge, toggle } from '../_'

/*
 visible (boolean) : (menu visible)
 group (numeric)   : opened menu group (index)
*/

const defaultState = {
  visible: false,
  group: null
}

const actions = {
  'MENU.TOGGLE': toggle('visible'),
  'MENU.MERGE': merge
}

export default reducer(defaultState, actions)
