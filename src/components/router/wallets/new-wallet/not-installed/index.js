import { actions } from 'data'
import { text } from 'resources'
import styles from './styles.css'

const map = ({ application: { language } }) => ({ language })

export default actions(map)(({ language }) => {
  const t = text(language, 'wallets.newWallet')

  return (
    <div className={styles.container}>
      {t('notAvailable')}
      <a href='https://metamask.io/' target='_blank'>{t('metamask')}</a>
      {t('reload')}
    </div>
  )
})
