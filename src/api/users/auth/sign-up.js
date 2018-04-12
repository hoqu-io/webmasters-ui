import { fetch } from '../../_'

export default ({ pubKey }) => (
  fetch({ action: { method, params: { pubKey, role: 'merchant' } } })
)

const method = 'users.auth.signUp'
