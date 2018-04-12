import { reducer, merge } from '../_'

/*
 isReady (boolean)      : is user loaded
 inProgress (boolean)   : user update in progress
 email (string)         : user email
 formEmail (string)     : email from form
 country (numeric)      : user country
 formCountry (numeric)  : country from form
 firstName (string)     : user first name
 formFirstName (string) : firstName from form
 lastName (string)      : user last name
 formLastName (string)  : lastName from form
 phone (string)         : user phone
 formPhone (string)     : phone from form
 website (string)       : user website
 formWebsite (string)   : website from form
 kyc (integer)          : KYC level
 */

const defaultState = {
  isReady: false,
  inProgress: false,
  email: '',
  formEmail: null,
  country: -1,
  formCountry: null,
  firstName: '',
  formFirstName: null,
  lastName: '',
  formLastName: null,
  phone: '',
  formPhone: null,
  webSite: '',
  formWebSite: null,
  kyc: 0
}

const actions = {
  'USER.MERGE': merge
}

export default reducer(defaultState, actions)
