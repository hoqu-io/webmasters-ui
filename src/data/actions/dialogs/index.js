import hide from './hide'
import mergePayload from './merge-payload'
import show from './show'

export default (dispatch) => ({
  hide: hide(dispatch),
  mergePayload: mergePayload(dispatch),
  show: show(dispatch)
})
