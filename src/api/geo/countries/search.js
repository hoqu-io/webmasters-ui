import { fetch } from '../../_'

export default ({ q, language }) => (
  fetch({ action: { method, params: { q, lang: language } } })
)

const method = 'geo.countries.search'
