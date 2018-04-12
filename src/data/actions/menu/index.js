import group from './group'
import toggle from './toggle'
import goTo from './go-to'

export default (dispatch) => ({
  setGroup: group(dispatch),
  toggle: toggle(dispatch),
  goTo: goTo(dispatch)
})
