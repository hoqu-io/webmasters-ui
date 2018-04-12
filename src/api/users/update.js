import { fetch } from '../_'

export default ({ firstName, lastName, ...user }) => (
  fetch({ action: { method, params: { ...user, firstname: firstName, lastname: lastName } } })
)

const method = 'users.update'
