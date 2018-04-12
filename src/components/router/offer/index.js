import { Avatar, Typography, Tab, Tabs } from 'material-ui'
import { NoteAdd } from 'material-ui-icons'
import { withStyles } from 'material-ui/styles'
import { Application } from 'layouts'

import { MainAction } from 'components/common'
import { actions } from 'data'
import { text } from 'resources'
import Content from './content'
import classes from './classes'

const map = ({
  application: { language },
  routing: { params },
  offers: { offer },
  wallets: { wallets, isReady: isWalletsReady }
}) => ({
  language,
  wallets,
  isWalletsReady,
  id: params ? params.id : null,
  tab: Math.max(0, TABS.indexOf(params.tab)),
  offer
})

export default withStyles(classes)(actions(map)(({
  language, id, offer, tab, wallets, isWalletsReady,
  classes,
  actions
}) => {
  const t = text(language, 'offers')
  const { offers: { createAd }, routing: { params } } = actions

  if (offer == null) { return (<Application loading />) }
  return (
    <Application loading={offer == null || offer.id !== id || !isWalletsReady}>
      <Typography variant='display1'>
        <Avatar src={offer.logo} className={classes.avatar} />
        {offer.name}
      </Typography>
      <Tabs value={tab}>
        {TABS.map((tab, index) => (
          <Tab key={index} label={t(tab)} onClick={params.bind(null, { tab: TABS[index] })} />
        ))}
      </Tabs>
      <Content offer={offer} t={t} tab={tab} classes={classes} actions={actions} wallets={wallets} />
      <MainAction onClick={createAd} hide={tab === TABS[2] && offer.isAddAdVisible}>
        <NoteAdd />
      </MainAction>
    </Application>
  )
}))

const TABS = [
  'description',
  'rules',
  'programs',
  'leads'
]
