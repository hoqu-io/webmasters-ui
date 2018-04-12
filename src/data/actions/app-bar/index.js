import toggleAccountMenu from './toggle-account-menu'
import toggleLanguagesMenu from './toggle-languages-menu'

export default (dispatch) => ({
  toggleAccountMenu: toggleAccountMenu(dispatch),
  toggleLanguagesMenu: toggleLanguagesMenu(dispatch)
})
