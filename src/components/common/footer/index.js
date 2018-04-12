import { withStyles } from 'material-ui/styles'

import classes from './classes'

export default withStyles(classes)(({ classes }) => (
  <div className={classes.root}>
    <div>
      <a target='_blank' href='#'>
        Terms & Condition
      </a>
      <a target='_blank' href='#'>
        Agreement
      </a>
      <a target='_blank' href='#'>
        Registration Form
      </a>
    </div>
    <div>
      Copyright Hoqu 2018. All Rights Reserved.
    </div>
  </div>
))
