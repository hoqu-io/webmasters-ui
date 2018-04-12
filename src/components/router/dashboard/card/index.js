import { Card, CardContent, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'

import classes from './classes'

export default withStyles(classes)(({ color, title, value, classes, icon: Icon, description }) => (
  <Card classes={{ root: classes.card }}>
    <CardContent classes={{ root: classes.cardContent }}>
      <Icon classes={{ root: classes.icon }} />
      <div className={classes.text}>
        <Typography classes={{ root: classes.value }}>
          {value}
        </Typography>
        <Typography classes={{ root: classes.header }}>
          {title}
        </Typography>
      </div>
    </CardContent>
  </Card>
))
