import classNames from 'classnames'
import { Button } from 'material-ui'

import styles from './styles.css'

export default ({ children, className, onClick, hide, disabled }) => {
  return (
    <Button
      variant='fab'
      aria-label='add'
      color='primary'
      disabled={disabled}
      className={classNames(styles.mainAction, { [styles.hide]: hide }, className)}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
