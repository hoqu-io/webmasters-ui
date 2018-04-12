/* global React */

import { Card } from 'material-ui'
import { withStyles } from 'material-ui/styles'

import classes from './classes'

class CardHeader extends React.PureComponent {
  componentDidMount () {
    const { root } = this.refs
    if (root == null || root.parentNode == null) { return }

    const parentStyle = root.parentNode.getAttribute('style') || ''
    root.parentNode.setAttribute('style', `${parentStyle};position:relative;top: 20px;`)
  }

  render () {
    const { children, classes, cardClasses, header } = this.props

    return (
      <div ref={'root'}>
        <div className={classes.stub} />
        <Card classes={{ root: classes.header, ...(cardClasses || {}) }}>
          {children}
        </Card>
        <div className={classes.text}>
          {header}
        </div>
      </div>
    )
  }
}

export default withStyles(classes)(CardHeader)
