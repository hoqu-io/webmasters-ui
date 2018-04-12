import { reducer, merge } from '../_'

/*
  isReady (boolean)        : is dashboard loaded
  currentWeek (object)     : contains info on total and sold leads
  for each day of the previous 7 days
    example:
      {
        1518901200000: {
          sold: 9,
          total: 10
        },
        1519074000000 : {
          sold: 10,
          total: 12
        }
      }
  previousWeek (object)   : same as currentWeek, but 7 days before currentWeek
*/

const defaultState = {
  isReady: false,
  currentWeek: {},
  previousWeek: {}
}

const actions = {
  'DASHBOARD.MERGE': merge
}

export default reducer(defaultState, actions)
