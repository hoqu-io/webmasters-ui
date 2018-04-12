import { fetch } from '../_'

export default ({ offer }) => (
  fetch({ action: { method, params: { id: offer } } })
)

const method = 'offers.get'
