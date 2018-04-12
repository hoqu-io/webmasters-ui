import classnames from 'classnames'
import { Card, CardHeader, CardContent, IconButton } from 'material-ui'
import { Close } from 'material-ui-icons'

import { actions } from 'data'
import { metamask } from 'resources/images'
import { text } from 'resources'
import NotInstalled from './not-installed'
import Ready from './ready'
import Locked from './locked'
import styles from './styles.css'

const map = ({
  application: { language },
  wallets: { wallets, newVisible },
  web3: { state, account }
}) => ({
  language,
  wallets,
  newVisible,
  state,
  account
})

export default actions(map)(({
  language,
  newVisible,
  state,
  account,
  actions: { wallets: { toggleNew } }
}) => {
  const t = text(language, 'wallets.newWallet')
  const Component = COMPONENTS[state] || (() => (''))

  return (
    <Card className={classnames({ [styles.card]: 1, [styles.hide]: !newVisible })}>
      <CardHeader
        avatar={<img src={metamask} className={styles.avatar} />}
        action={<IconButton onClick={toggleNew}><Close /></IconButton>}
        title={t('header')}
        subheader={account || ''}
      />
      <CardContent>
        <Component />
      </CardContent>
    </Card>
  )
})

const COMPONENTS = {
  'not installed': NotInstalled,
  'ready': Ready,
  'locked': Locked
}
