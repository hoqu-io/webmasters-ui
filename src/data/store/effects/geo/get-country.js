import { call, select, put } from 'redux-saga/effects'

import { getById } from 'api/geo/countries'

export default function * ({ payload: { id } }) {
  const { language, countries } = yield select(selector)
  const name = `${language}_${id}`
  if (countries[name] != null) { return }

  const result = yield call(getById, { id, language })

  if (!result || !result.title) { return }
  yield put({ type: 'GEO.MERGE-COUNTRIES', payload: { [name]: result.title } })
}

const selector = ({ application: { language }, geo: { countries } }) => ({ language, countries })
