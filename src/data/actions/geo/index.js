import clearSearch from './clear-search'
import deleteSearch from './delete-search'
import getCountry from './get-country'
import search from './search'

export default (dispatch) => ({
  clearSearch: clearSearch(dispatch),
  deleteSearch: deleteSearch(dispatch),
  getCountry: getCountry(dispatch),
  search: search(dispatch)
})
