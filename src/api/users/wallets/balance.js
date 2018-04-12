import { fetch } from '../../_'

export default ({ wallets }) => (
  fetch({ action: { method, params: { address: wallets } } })
)

const method = 'users.wallets.balance'
