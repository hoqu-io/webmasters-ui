import { List } from 'material-ui'
import AddIcon from 'material-ui-icons/Add'

import { Application } from 'layouts'
import { actions } from 'data'
import { text } from 'resources'
import { MainAction } from 'components/common'
import NewWallet from './new-wallet'
import Wallet from './wallet'

const map = ({ application: { language }, wallets: { isReady, wallets, newVisible } }) => ({
  language,
  isReady,
  wallets,
  newVisible
})

export default actions(map)(({ language, isReady, wallets, newVisible, actions: { wallets: { toggleNew } } }) => {
  const t = text(language, 'wallets')

  return (
    <Application loading={!isReady} header={t('header')}>
      <NewWallet />
      <List>
        {wallets.map(({ name, formName, address, inProgress }, key) => (
          <Wallet
            key={address}
            name={name}
            formName={formName}
            address={address}
            inProgress={inProgress}
          />
        ))}
      </List>
      <MainAction onClick={!newVisible ? toggleNew : null} hide={newVisible}>
        <AddIcon />
      </MainAction>
    </Application>
  )
})
