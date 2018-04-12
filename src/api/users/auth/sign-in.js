import { fetch } from '../../_'

export default ({ challenge: { 1: { value: challenge } }, decision }) => (
  fetch({ action: { method, params: { challenge, decision } } })
)

const method = 'users.auth.signIn'
