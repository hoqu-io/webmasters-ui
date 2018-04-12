import { compose } from 'ramda'

import { reducer, merge, mergeProperty } from '../_'

/* link format: (http|https)://host/#/page?param1=v1&p2=v2 */
/*
 page (string)   : uri link
 params (object) : uri query params
*/

const history = (state) => {
  const { page, params } = state

  const query = Object.keys(params)
    .filter((key) => (key !== '' && params[key] != null))
    .map((key) => (`${key}=${params[key]}`))
  window.history.pushState({}, 'HOQU', `#/${page || ''}${query.length === 0 ? '' : `?${query.join('&')}`}`)

  return state
}

const defaultState = () => {
  const { 0: page, 1: params } = window.location.hash.split('?')

  return {
    page: (page || '').substr(2),
    params: (params || '').split('&').reduce((acc, item) => {
      const { 0: key, 1: value } = item.split('=')
      acc[key] = decodeURI(value || '')

      return acc
    }, {})
  }
}

const actions = {
  'ROUTING.MERGE': compose(history, merge),
  'ROUTING.MERGE-PARAMS': compose(history, mergeProperty('params'))
}

export default reducer(defaultState(), actions)
