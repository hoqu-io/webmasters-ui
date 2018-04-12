import uuid from 'uuid'
import { call, select, put } from 'redux-saga/effects'

import { searchCountries } from 'api/geo/countries'

export default function * ({ payload: { component, q } }) {
  const id = uuid.v4()
  const { language, search: _search } = yield select(selector(component))

  yield put({ type: 'GEO.MERGE-SEARCHES', payload: { [component]: { q, id, result: [] } } })

  // Debounce
  if (_search != null) { yield wait(DEBOUNCE) }

  const { search: __search } = yield select(selector(component))
  if (__search == null || __search.id !== id) { return }

  // Search
  const countries = yield call(searchCountries, { q, language })
  if (!Array.isArray(countries)) { return }

  // Set countries
  yield put({
    type: 'GEO.MERGE-COUNTRIES',
    payload: countries.reduce((agg = { }, { id, title }) => {
      agg[`${language}_${id}`] = title

      return agg
    })
  })

  const { search: actualSearch } = yield select(selector(component))
  if (actualSearch == null || actualSearch.q !== q) { return }

  // Set result
  yield put({ type: 'GEO.MERGE-SEARCHES', payload: { [component]: { q, id, result: countries } } })
}

const selector = (component) =>
  ({ application: { language }, geo: { searches } }) => ({ language, search: searches[component] })
const wait = (delay) => (new Promise((resolve) => (setTimeout(resolve, delay))))
const DEBOUNCE = 100
