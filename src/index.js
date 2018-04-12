import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import { store } from 'data'
import { Application } from 'components'

import './styles.css'

document.addEventListener('DOMContentLoaded', () => {
  const instance = store()
  const { dispatch } = instance
  dispatch({ type: '*APPLICATION.START', payload: { } })

  ReactDOM.render(
    (
      <Provider store={instance}>
        <Application />
      </Provider>
    ),
    document.getElementById('application')
  )
})
