import { CardHeader, CardContent, IconButton } from 'material-ui'
import { Close, DeveloperMode } from 'material-ui-icons'

import { actions } from 'data'
import { text } from 'resources'
import styles from './styles.css'

const map = ({application: { language }}) => ({ language })

export default actions(map)(({ language, actions: { dialogs: { hide } } }) => {
  const t = text(language, 'notImplemented')

  return (
    <div className={styles.container}>
      <CardHeader
        avatar={<DeveloperMode />}
        action={<IconButton onClick={hide}><Close /></IconButton>}
        title={t('header')}
      />
      <CardContent>
        {t('content')}
      </CardContent>
    </div>
  )
})
