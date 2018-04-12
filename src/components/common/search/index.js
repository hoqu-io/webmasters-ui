import { TextField } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import * as Icons from 'material-ui-icons'

import { actions } from 'data'
import { text } from 'resources'

import classes from './classes'

const map = ({ application: { language } }) => ({ language })

export default withStyles(classes)(actions(map)(({ language, classes, ...props }) => {
  const t = text(language, 'search')

  return (
    <TextField
      fullWidth
      placeholder={t('placeholder')}
      InputProps={{ endAdornment: <Icons.Search className={classes.icon} /> }}
      {...props}
    />
  )
}))
