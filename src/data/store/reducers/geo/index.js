import { filterObject, reducer, mergeProperty } from '../_'

/*
 countries (object) : object like { 'en_9': 'USA', 'ru_9': 'США' }
 searches  (object) : object like {
   component_id1: { q: 'us', result: [ { id, title } ] },
   component_id2: { q: 'u', result: null }
 }
 */

const defaultState = {
  countries: { },
  searches: { }
}

const actions = {
  'GEO.MERGE-COUNTRIES': mergeProperty('countries'),
  'GEO.MERGE-SEARCHES': mergeProperty('searches'),
  'GEO.DELETE-SEARCH': filterObject('searches', ({ id }, { key }) => (key !== id))
}

export default reducer(defaultState, actions)
