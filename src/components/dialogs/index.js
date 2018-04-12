import { Dialog } from 'material-ui'

import { actions } from 'data'
import NotImplemented from './not-implemented'

const map = ({ dialogs: { active } }) => ({ dialog: active })

export default actions(map)(({ dialog, actions: { dialogs: { hide } } }) => {
  const Component = COMPONENTS[dialog]
  if (Component == null) { return null }

  return (
    <Dialog open onClose={hide}>
      {renderComponent(Component)}
    </Dialog>
  )
})

const renderComponent = (Component) => (Component ? <Component /> : null)

const COMPONENTS = {
  'not-implemented': NotImplemented
}
