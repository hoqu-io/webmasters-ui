import classNames from 'classnames'
import { compose } from 'ramda'
import { AppBar, Button, IconButton, ListItemIcon, Menu, MenuItem, Toolbar } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import uuid from 'uuid'
import * as Icons from 'material-ui-icons'

import { actions } from 'data'
import { text } from 'resources'
import classes from './classes'

const map = ({
  appBar: { accountMenu, languagesMenu },
  application: { languages, language, screenWidth },
  user: { avatar },
  menu: { visible }
}) => ({
  accountMenu,
  languagesMenu,
  avatar,
  screenWidth,
  visible: visible || screenWidth > BREAKPOINT,
  languages: Object.keys(languages).map((value) => ({ value, title: languages[value] })),
  language: { value: language, title: languages[language] }
})

export default withStyles(classes)(actions(map)(({
  accountMenu,
  languagesMenu,
  avatar,
  screenWidth,
  visible,
  language,
  languages,
  actions: {
    appBar: { toggleAccountMenu, toggleLanguagesMenu },
    application: { setLanguage },
    menu: { toggle: toggleMenu },
    routing: { goTo },
    user: { signOut }
  },
  classes
}) => {
  const tAccount = text(language.value, 'appBar.account')

  return (
    <AppBar
      position='fixed'
      classes={{
        root: classes.appBar,
        colorPrimary: classes.appBarColor
      }}
      className={classNames({ [classes.hide]: !visible })}
    >
      <Toolbar classes={{
        root: classes.toolbar
      }}>
        <IconButton className={classNames({ [classes.hideHamburger]: screenWidth > BREAKPOINT })} color='inherit' aria-label='Menu' onClick={toggleMenu}>
          <Icons.Menu />
        </IconButton>
        <div className={classes.right}>
          <Button
            id={ID_LANGUAGES}
            color='inherit'
            aria-owns={languagesMenu ? 'languages-menu' : null}
            aria-haspopup
            onClick={toggleLanguagesMenu}
          >
            {language.title}
          </Button>
          <Menu
            id='languages-menu'
            className={classes.menu}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            anchorEl={document.getElementById(ID_LANGUAGES)}
            open={languagesMenu}
            onClose={toggleLanguagesMenu}
          >
            {languages.map(({ value, title }) => (
              <MenuItem key={value} onClick={compose(setLanguage.bind(null, value), toggleLanguagesMenu)}>{title}</MenuItem>
            ))}
          </Menu>
          <IconButton color='inherit' aria-label='Notifications'>
            <Icons.Notifications />
          </IconButton>
          <IconButton
            id={ID_ACCOUNT}
            color='inherit'
            aria-label='Account'
            onClick={toggleAccountMenu}
          >
            {avatar && avatar !== ''
              ? <div className={classes.avatar} style={avatar && avatar !== '' ? { backgroundImage: `url(${avatar})` } : null} />
              : <Icons.AccountCircle />
            }
          </IconButton>
          <Menu
            id='account-menu'
            anchorEl={document.getElementById(ID_ACCOUNT)}
            classes={{ paper: classes.menu }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={accountMenu}
            onClose={toggleAccountMenu}
          >
            <MenuItem classes={{ root: classes.accountMenuItem }} onClick={compose(toggleAccountMenu, goTo.bind(null, { page: 'profile' }))}>
              <ListItemIcon classes={{root: classes.listItemIcon}}>
                <Icons.AccountBox />
              </ListItemIcon>
              {tAccount('profile')}
            </MenuItem>
            <MenuItem classes={{ root: classes.accountMenuItem }} onClick={compose(toggleAccountMenu, goTo.bind(null, { page: 'wallets' }))}>
              <ListItemIcon classes={{root: classes.listItemIcon}}>
                <Icons.AccountBalanceWallet />
              </ListItemIcon>
              {tAccount('wallets')}
            </MenuItem>
            <MenuItem classes={{ root: classes.accountMenuItem }} onClick={compose(toggleAccountMenu, signOut)}>
              <ListItemIcon classes={{root: classes.listItemIcon}}>
                <Icons.ExitToApp />
              </ListItemIcon>
              {tAccount('logout')}
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}))

const ID_LANGUAGES = uuid.v4()
const ID_ACCOUNT = uuid.v4()
const BREAKPOINT = 970
