import Web3 from './web3'
import Unlock from './unlock'
import Ready from './ready'
import { Loading } from 'components/common'
import { actions } from 'data'
import styles from './styles.css'

const map = ({ web3: { state, account } }) => ({ state, account })

export default actions(map)(({ state }) => {
  let Component

  switch (state) {
    case 'not installed':
      Component = Web3
      break
    case 'loading':
      Component = Loading
      break
    case 'locked':
      Component = Unlock
      break
    case 'ready':
      Component = Ready
      break
    default:
      Component = Loading
      break
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo} />
        <Component />
      </div>
    </div>
  )
})
