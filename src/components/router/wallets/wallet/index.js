import { compose, path } from 'ramda'
import classNames from 'classnames'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  TextField
} from 'material-ui'
import { withStyles } from 'material-ui/styles'
import EditIcon from 'material-ui-icons/Edit'
import CloseIcon from 'material-ui-icons/Close'

import { Loading, WalletBalance } from 'components/common'
import { actions } from 'data'
import { text } from 'resources'
import classes from './classes'

const map = ({ application: { language }, wallets: { editableWallet, wallets } }) => (
  { language, editableWallet, wallets }
)

export default withStyles(classes)(actions(map)(({
  language, wallets,
  classes, name, formName, address, editableWallet, inProgress,
  actions: { wallets: { edit, setFormName, rename, deleteWallet } }
}) => {
  const t = text(language, 'wallets.edit')
  const editable = editableWallet === address

  return (
    <Card className={classNames(classes.root, { [classes.editable]: editable })}>
      <CardHeader
        avatar={<Avatar aria-label='MetaMask' className={classes.metamask} />}
        action={inProgress
          ? (
            <IconButton onClick={edit.bind(null, editable ? null : address)}>
              <Loading size='small' />
            </IconButton>
          )
          : (
            <IconButton onClick={edit.bind(null, editable ? null : address)}>
              {editable ? <CloseIcon /> : <EditIcon />}
            </IconButton>
          )
        }
        title={name}
        subheader={<WalletBalance address={address} />}
      />
      <Collapse in={editableWallet === address} timeout={300}>
        <CardContent>
          <TextField
            fullWidth
            value={formName == null ? name : formName}
            type='text'
            label={t('name')}
            autoFocus
            disabled={inProgress}
            onChange={compose(setFormName.bind(null, address), path([ 'target', 'value' ]))}
          />
        </CardContent>
        <CardActions disableActionSpacing classes={{ root: classes.actions }}>
          {(wallets || []).length < 2 ? null : (
            <Button color='secondary' disabled={inProgress} onClick={deleteWallet}>
              {t('delete')}
            </Button>
          )}
          <Button color='primary' disabled={inProgress} onClick={rename}>
            {t('save')}
          </Button>
        </CardActions>
      </Collapse>
    </Card>
  )
}))
