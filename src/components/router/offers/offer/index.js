import { Avatar, Button, Card, CardActions, CardHeader, CardMedia, IconButton } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { Close } from 'material-ui-icons'
import moment from 'moment'

import { actions } from 'data'
import { text } from 'resources'
import { logo } from 'resources/images'
import classes from './classes'

const map = ({ application: { language } }) => ({ language })

export default withStyles(classes)(actions(map)(({
  language,
  offer: { id, name, created_at: created, ...offer },
  classes,
  actions: { offers: { createAd, toggleNew }, routing: { goTo } }
}) => {
  const t = text(language, 'offers')

  return (
    <Card classes={{ root: classes.root }}>
      <CardHeader
        avatar={<Avatar aria-label='avatar' classes={{ root: classes.avatar }} />}
        action={<IconButton onClick={toggleNew}><Close /></IconButton>}
        title={name}
        subheader={moment(created * 1000).format('LL')}
      />
      <CardMedia
        classes={{ root: classes.media }}
        image={logo}
      />
      <CardActions disableActionSpacing>
        <div className={classes.left} />
        <Button color='primary' onClick={goTo.bind(null, { page: 'offer', params: { id } })}>
          {t('about')}
        </Button>
      </CardActions>
    </Card>
  )
}))
