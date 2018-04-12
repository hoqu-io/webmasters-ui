import { fetch } from '../../_'

export default ({ address, name }) => (
  fetch({ action: { method, params: { address, name } } })
)

const method = 'users.wallets.rename'
