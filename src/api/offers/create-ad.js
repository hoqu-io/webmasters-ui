import { fetch } from '../_'

export default ({ phone, beneficiaryAddress, offer }) => (
  fetch({ action: { method, params: { phone, beneficiary_address: beneficiaryAddress, offer_id: offer } } })
)

const method = 'ads.add'
