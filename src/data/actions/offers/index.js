import createAd from './create-ad'
import hideNewAd from './hide-new-ad'
import mergeFilter from './merge-filter'
import saveAd from './save-ad'
import setOfferPhone from './set-offer-phone'
import setOfferWallet from './set-offer-wallet'
import toggleFilterVisible from './toggle-filter-visible'

export default (dispatch) => ({
  createAd: createAd(dispatch),
  hideNewAd: hideNewAd(dispatch),
  mergeFilter: mergeFilter(dispatch),
  saveAd: saveAd(dispatch),
  setOfferPhone: setOfferPhone(dispatch),
  setOfferWallet: setOfferWallet(dispatch),
  toggleFilterVisible: toggleFilterVisible(dispatch)
})
