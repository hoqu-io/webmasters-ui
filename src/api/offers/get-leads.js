import { fetch } from '../_'

export default (id) => (
  fetch({ action: { method, params: { id } } })
)

const method = 'leads.list'
