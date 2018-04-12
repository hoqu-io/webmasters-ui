import { withStyles } from 'material-ui/styles'

import classes from './classes'
import Programs from './programs'
import Leads from './leads'

export default withStyles(classes)(({
  offer,
  wallets,
  t, tab,
  actions,
  classes
}) => {
  const { ads, description, rules, ...other } = offer
  const props = { actions, offer, classes, wallets, t }

  switch (parseInt(tab)) {
    case 0:
    case null:
    case undefined:
      return (<div className={classes.content} dangerouslySetInnerHTML={{ __html: description }} />)

    case 1:
      return (<div className={classes.content} dangerouslySetInnerHTML={{ __html: rules }} />)

    case 2:
      return (<Programs {...props} />)

    case 3:
      return (<Leads {...props} />)

    default:
      return (
        <div className={classes.content}>
          <div dangerouslySetInnerHTML={{ __html: JSON.stringify(Object.keys(other), null, 4) }} />
          <div>
            {JSON.stringify(ads, null, 4)}
          </div>
        </div>
      )
  }
})
