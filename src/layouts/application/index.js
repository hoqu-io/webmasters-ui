import { withStyles } from 'material-ui/styles'
import { AppBar, Footer, Loading, Menu } from 'components/common'
import { Typography } from 'material-ui'

import classes from './classes'

export default withStyles(classes)((props) => (
  <div>
    <div className={props.classes.container}>
      <AppBar />
      <Menu />
      <div className={props.classes.content}>
        {renderContent(props)}
      </div>
    </div>
  </div>
))

const renderContent = ({ loading, header, children, classes }) => {
  if (loading) {
    return (
      <div className={classes.loading}>
        <Loading />
      </div>
    )
  }

  return (
    <div className={classes.contentInner}>
      <div className={classes.contentChildren}>
        {!header ? null : (
          <Typography
            className={classes.pageHeader}
            variant='display1'
            gutterBottom>
            {header}
          </Typography>
        )}
        {children}
        <div className={classes.margin} />
      </div>
      <Footer />
    </div>
  )
}
