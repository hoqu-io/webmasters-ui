import { compose, path } from 'ramda'

import { TextField, Button } from 'material-ui'
import { actions } from 'data'
import { text } from 'resources'
import styles from './styles.css'

const map = ({
  application: {
    language
  },
  wallets: {
    newName,
    wallets,
    isConnectInProgress
  },
  web3: {
    account
  }
}) => ({
  language,
  newName,
  wallets,
  isConnectInProgress,
  account
})

export default actions(map)(({
  language,
  newName,
  wallets,
  isConnectInProgress,
  account,
  actions: { wallets: { setNewName, connect } }
}) => {
  const t = text(language, 'wallets.newWallet')
  const exist = (wallets || []).filter(({ address }) => (
    (address || '').toString().toLowerCase() === (account || '').toString().toLowerCase()
  )).length > 0

  if (exist) {
    return (
      <div className={styles.exist}>
        {t('existText')}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <TextField
        fullWidth
        type='text'
        className={styles.input}
        label={t('title')}
        value={newName}
        disabled={isConnectInProgress}
        onChange={compose(setNewName, getValue)}
      />
      <Button
        color='primary'
        className={styles.button}
        disabled={isConnectInProgress}
        onClick={connect}
      >
        {t('connect')}
      </Button>
    </div>
  )
})

const getValue = path.bind(null, [ 'target', 'value' ])
