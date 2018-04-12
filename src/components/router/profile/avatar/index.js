import { Button } from 'material-ui'
import { withStyles } from 'material-ui/styles'

import classes from './classes'
import upload from './upload'

export default withStyles(classes)(({ avatar, classes, className, onChange, uploadText }) => (
  <div className={classes.root} onClick={upload.bind(null, onChange)}>
    <div
      className={classes.avatar}
      style={avatar != null && avatar !== '' ? { backgroundImage: `url(${avatar})` } : null}
    />
    <Button fullWidth color='primary'>{uploadText}</Button>
  </div>
))
