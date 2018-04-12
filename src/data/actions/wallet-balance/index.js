import requestBalance from './request-balance'
import removeBalance from './remove-balance'

export default (dispatch) => ({
  requestBalance: requestBalance(dispatch),
  removeBalance: removeBalance(dispatch)
})
