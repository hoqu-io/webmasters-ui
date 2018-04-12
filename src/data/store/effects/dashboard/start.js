import { call, put } from 'redux-saga/effects'

import { stats } from 'api/dashboard'

export default function * () {
  yield put({ type: 'DASHBOARD.MERGE', payload: { isReady: false } })
  const data = yield call(stats)
  const leadsData = (Array.isArray(data) ? data : []).reduce((acc, { date, cnt, status }) => {
    const day = acc[date * 1000] || (acc[date * 1000] = { total: 0, sold: 0 })
    day[status === 4 ? 'sold' : 'total'] += +cnt
    return acc
  }, {})
  const twoWeeks = getCurrentWeek()
  Object.keys(leadsData).forEach(item => {
    if (twoWeeks.hasOwnProperty(item)) {
      twoWeeks[item] = leadsData[item]
    }
  })
  const previousWeek = Object.keys(twoWeeks).splice(7, 7).reduce((acc, item) => {
    acc[item] = twoWeeks[item]
    return acc
  }, {})
  const currentWeek = Object.keys(twoWeeks).splice(0, 7).reduce((acc, item) => {
    acc[item] = twoWeeks[item]
    return acc
  }, {})
  yield put({ type: 'DASHBOARD.MERGE', payload: { currentWeek, previousWeek, isReady: true } })
}

const getCurrentWeek = () => {
  const daysArray = (() => {
    let result = []
    for (let i = 0; i < 14; i++) {
      let day = new Date()
      day.setHours(0, 0, 0, 0)
      day.setDate(day.getDate() - i)
      result.push(day.getTime())
    }
    return result
  })()
  return daysArray.reduce((acc, item) => {
    acc[item] = { total: 0, sold: 0 }
    return acc
  }, {})
}
