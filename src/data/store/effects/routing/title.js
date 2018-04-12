import { select } from 'redux-saga/effects'

export default function * ({ payload: { title } }) {
  const { page } = yield select(selector)
  document.title = title ? `HOQU Affiliate: ${title}` : (TITLES[page] || TITLES.default)
}

const selector = ({ routing: { page } }) => ({ page })

const TITLES = {
  default: 'HOQU Affiliate',
  'sign-in': 'HOQU Affiliate: Sign in',
  'dashboard': 'HOQU Affiliate: Dashboard',
  'profile': 'HOQU Affiliate: Profile',
  'wallets': 'HOQU Affiliate: Wallets',
  'offers': 'HOQU Affiliate: Offers'
}
