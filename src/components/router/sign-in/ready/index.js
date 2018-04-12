import { Card, CardHeader, CardContent, Button } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import classes from '../classes'
import { actions } from 'data'
import { metamask } from 'resources/images'
import { text } from 'resources'
import styles from '../styles.css'

const map = ({ application: { language } }) => ({ language })

export default withStyles(classes)(actions(map)(({ language, classes, actions: { user: { signIn } } }) => {
  const t = text(language, 'signIn.ready')
  const { card, avatar, title, subheader, content, cardContent } = classes

  return (
    <Card classes={{root: card}}>
      <CardHeader
        classes={{
          avatar,
          title,
          subheader,
          content
        }}
        avatar={<img src={metamask} className={styles.avatar} />}
        title={t('header')}
        subheader={t('subheader')}
      />
      <CardContent
        classes={{root: cardContent}}
      >
        <Button
          variant='raised'
          color='primary'
          onClick={signIn}
        >
          {t('signIn')}
        </Button>
      </CardContent>
    </Card>
  )
}))
