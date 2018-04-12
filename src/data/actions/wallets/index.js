import connect from './connect'
import deleteWallet from './delete'
import edit from './edit'
import rename from './rename'
import setFormName from './set-form-name'
import setNewName from './set-new-name'
import toggleNew from './toggle-new'

export default (dispatch) => ({
  connect: connect(dispatch),
  deleteWallet: deleteWallet(dispatch),
  edit: edit(dispatch),
  rename: rename(dispatch),
  setFormName: setFormName(dispatch),
  setNewName: setNewName(dispatch),
  toggleNew: toggleNew(dispatch)
})
