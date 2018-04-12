/* global React */

import { actions } from 'data'

const map = ({ walletBalance: { wallets } }) => ({ wallets })

class WalletBalance extends React.PureComponent {
  componentDidMount () {
    this.requestBalance()
  }

  componentWillUnmount () {
    this.props.actions.walletBalance.removeBalance(this.props.address)
  }

  render () {
    const { wallets, address } = this.props
    const { balance } = wallets[address] || {}

    return balance == null ? null : <span>{balance} HQX</span>
  }

  requestBalance () {
    this.props.actions.walletBalance.requestBalance(this.props.address)
  }
}

export default actions(map)(WalletBalance)
