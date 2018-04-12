import { connect } from 'react-redux'

import actions from './actions'

export default (map) => (component) => (connect(map, actions)(component))
