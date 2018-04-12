import { MuiThemeProvider } from 'material-ui'

import { actions } from 'data'
import theme from 'theme'
import { Loading } from 'components/common'
import Error from 'components/error'
import Dialogs from 'components/dialogs'
import Router from 'components/router'
import styles from './styles.css'

const map = ({ application: { isReady, web3, error } }) => ({ isReady, web3, error })

export default actions(map)(({ isReady, web3, error }) => {
  if (!isReady) { return (<div className={styles.loading}><Loading size='large' /></div>) }
  if (error) { return (<Error />) }

  return (
    <MuiThemeProvider theme={theme()}>
      <div>
        <Router />
        <Dialogs />
      </div>
    </MuiThemeProvider>
  )
})
