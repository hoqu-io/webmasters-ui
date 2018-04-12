import goTo from './go-to'
import link from './link'
import params from './params'

export default (dispatch) => ({
  goTo: goTo(dispatch),
  link: link(dispatch),
  params: params(dispatch)
})
