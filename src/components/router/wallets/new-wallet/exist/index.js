import { actions } from 'data'
import { text } from 'resources'
import styles from './styles.css'

const map = ({ application: { language }, web3: { account } }) => ({ language, account })

export default actions(map)(({ language, account }) => {
  const t = text(language, 'wallets.newWallet')

  return (
    <div className={styles.container}>
      {`${t('account')} ${account} ${t('exist')}`}
    </div>
  )
})
