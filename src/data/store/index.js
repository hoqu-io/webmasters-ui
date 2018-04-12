import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import effects from './effects'

export default () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    combineReducers(reducers),
    compose(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(effects)

  return store
}
