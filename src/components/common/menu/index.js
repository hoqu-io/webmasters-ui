import classNames from 'classnames'
import { Collapse, List, ListItem, ListItemIcon, ListItemText, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { FiberManualRecord, AccountCircle, Dashboard, Assignment } from 'material-ui-icons'

import { actions } from 'data'
import { text } from 'resources'
import LogoIcon from './icon'
import classes from './classes'

const map = ({
  application: { language, screenWidth },
  menu: { visible, group },
  routing: { page }
}) => ({
  language,
  visible: visible || screenWidth > BREAKPOINT,
  screenWidth,
  group,
  page
})

const onClick = ({ actions: { routing: { link }, menu: { goTo, setGroup } } }, { page, href, action, group, title, screenWidth }) => {
  if (action) { return action() }
  if (page != null) { return goTo({ page }) }
  if (href != null) { return link(href) }

  setGroup(title === group ? null : title)
}

const menuItemColor = ({ classes, page, pages, routingPage }) => {
  if (page == null) { return classes.color }
  if (page != null && ((pages || []).indexOf(routingPage) >= 0 || page === routingPage)) { return classes.activeColor }

  return classes.color
}

const MenuItem = ({
  t,
  group,
  title,
  icon,
  classes,
  action,
  href,
  page,
  pages,
  items,
  routingPage,
  actions
}) => {
  const color = menuItemColor({ classes, page, pages, routingPage })
  const rightIcon = items == null ? null : (
    <ListItemIcon classes={{ root: color }}>
      {group === title ? <i className={classes.collapseUp} /> : <i className={classes.collapseDown} />}
    </ListItemIcon>
  )

  return (
    <div>
      <ListItem
        classes={{ root: classes.listItem }}
        button onClick={onClick.bind(null, { actions }, { page, action, href, title, group })}
        className={classNames({ [classes.listItemSelected]: group === title }, color)}
      >
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText classes={{ inset: classes.text }} inset disableTypography primary={t(title)} />
        {rightIcon}
      </ListItem>
      <Collapse in={group === title}>
        <List
          classes={{ root: classes.list }}
          component='nav'
        >
          {(items || []).map((item, key) => (
            <MenuItem
              key={key}
              {...item}
              t={t}
              group={group}
              routingPage={routingPage}
              actions={actions}
              classes={classes}
            />
          ))}
        </List>
      </Collapse>
    </div>
  )
}

export default withStyles(classes)(actions(map)(({
  language,
  visible,
  group,
  page,
  actions,
  classes
}) => {
  const t = text(language, 'menu')
  const itemsProps = { t, group, routingPage: page, actions, classes }
  const forums = [
    { icon: 'facebook', title: 'facebook', href: 'https://www.facebook.com/HOQUio' },
    { icon: 'telegram', title: 'telegram', href: 'https://t.me/hoquio' },
    { icon: 'medium', title: 'medium', href: 'https://blog.hoqu.io/' },
    { icon: 'youtube', title: 'youtube', href: 'https://www.youtube.com/channel/UCcfcY4aMC4liK8FAxmZP2Qw' },
    { icon: 'instagram', title: 'instagram', href: 'http://instagram.com/hoqu_io' },
    { icon: 'bitcointalk', title: 'bitcointalk', href: 'https://bitcointalk.org/index.php?topic=2254411' }
  ]

  return (
    <List
      component='nav'
      classes={{ root: classes.container }}
      className={classNames({ [classes.hide]: !visible })}
    >
      <div className={classes.containerHeader}>
        <div className={classes.logo} onClick={actions.routing.goTo.bind(this, { page: '' })} />
        <div />
      </div>
      <Typography className={classNames({ [classes.listItemSelected]: group === itemsProps.title })} variant='subheading' classes={{ root: classes.subheading }}>
        {t('account')}
      </Typography>
      <MenuItem
        icon={<Dashboard classes={{ root: classes.icon }} />}
        title={'dashboard'}
        page='dashboard'
        pages={[ 'dashboard', '' ]}
        {...itemsProps}
      />
      <MenuItem
        icon={<AccountCircle classes={{ root: classes.icon }} />}
        title={'account'}
        items={[
          { icon: <FiberManualRecord classes={{ root: classes.icon }} className={classes.dot} />, title: 'profile', page: 'profile', ...itemsProps },
          { icon: <FiberManualRecord classes={{ root: classes.icon }} className={classes.dot} />, title: 'wallets', page: 'wallets', ...itemsProps }
        ]}
        {...itemsProps}
      />
      <MenuItem
        icon={<Assignment classes={{ root: classes.icon }} />}
        title={'offers'}
        page='offers'
        {...itemsProps}
      />
      <Typography variant='subheading' classes={{ root: classes.subheading }}>
        {t('forums')}
      </Typography>
      {forums.map(({ icon, title, href }) => (
        <MenuItem key={href} icon={<LogoIcon icon={icon} className={classes.icon} />} title={title} href={href} {...itemsProps} />
      ))}
    </List>
  )
}))

const BREAKPOINT = 970
