import { fetch } from '../../_'

export default ({ address }) => (
  fetch({ action: { method, params: { address } } })
)

const method = 'users.wallets.remove'
