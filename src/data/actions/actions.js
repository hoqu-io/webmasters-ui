import appBar from './app-bar'
import application from './application'
import dialogs from './dialogs'
import geo from './geo'
import menu from './menu'
import offers from './offers'
import routing from './routing'
import user from './user'
import wallets from './wallets'
import walletBalance from './wallet-balance'

export default (dispatch) => ({
  actions: {
    appBar: appBar(dispatch),
    application: application(dispatch),
    dialogs: dialogs(dispatch),
    geo: geo(dispatch),
    menu: menu(dispatch),
    offers: offers(dispatch),
    routing: routing(dispatch),
    user: user(dispatch),
    wallets: wallets(dispatch),
    walletBalance: walletBalance(dispatch)
  }
})
