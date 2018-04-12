import { actions } from 'data'
import Dashboard from './dashboard'
import Offer from './offer'
import Offers from './offers'
import Profile from './profile'
import SignIn from './sign-in'
import Wallets from './wallets'

const map = ({ routing: { page } }) => ({ page })

export default actions(map)(({ page }) => {
  const Component = PAGES[page] || Dashboard

  return <Component />
})

const PAGES = {
  'sign-in': SignIn,
  '': Dashboard,
  offer: Offer,
  offers: Offers,
  dashboard: Dashboard,
  profile: Profile,
  wallets: Wallets
}
