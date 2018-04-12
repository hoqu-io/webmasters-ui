/* global localStorage */

import { compose } from 'ramda'
import moment from 'moment'

import { reducer, merge } from '../_'

/*
 isReady (boolean)     : (is application ready)
 languages (object)    : { value: 'title' }
 language (string)     : user language
 web3 (boolean)        : is browser has connect to web3
 error (boolean)       : critical error (stop application)
 screenWidth (number)  : current width of viewport
 screenHeight (number) : current height of viewport
 */

const setLanguage = (state) => {
  if (state == null || state.language == null) { return state }
  localStorage.setItem('language', state.language)
  moment.locale(state.language)

  return state
}

const defaultState = () => {
  return {
    isReady: false,
    languages: { en: 'English', ru: 'Russian' },
    language: localStorage.getItem('language') || 'en',
    web3: !(window.Web3 == null || window.web3 == null),
    error: null,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
  }
}

const actions = {
  'APPLICATION.MERGE': compose(setLanguage, merge)
}

export default reducer(defaultState(), actions)
