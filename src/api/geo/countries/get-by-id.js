import { fetch } from '../../_'

export default ({ id, language }) => (
  fetch({ action: { method, params: { id, lang: language } } })
)

const method = 'geo.countries.get'
