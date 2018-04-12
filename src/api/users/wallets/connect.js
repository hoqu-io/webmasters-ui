import { fetch } from '../../_'

export default ({ challenge: { 1: { value: challenge } }, address, decision, name }) => (
  fetch({ action: { method, params: { challenge, decision, name } } })
)

const method = 'users.wallets.add'
