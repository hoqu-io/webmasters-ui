import { fetch } from '../_'

export default () => (
  fetch({ action: { method, params: { } } })
)

const method = 'leads.stats'
