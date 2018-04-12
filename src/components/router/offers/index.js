import { withStyles } from 'material-ui/styles'

import { Application } from 'layouts'
import { actions } from 'data'
import { text } from 'resources'

import Offer from './offer'
import Filter from './filter'
import classes from './classes'

const map = ({ application: { language }, offers: { isReady, list } }) => ({ language, isReady, offers: list })

export default withStyles(classes)(actions(map)(({
  language, isReady, offers,
  classes
}) => {
  const t = text(language, 'offers')

  return (
    <Application loading={!isReady} header={t('header')}>
      <Filter />
      <div className={classes.root}>
        {offers.map((offer, key) => (<Offer key={key} offer={offer} />))}
      </div>
    </Application>
  )
}))
