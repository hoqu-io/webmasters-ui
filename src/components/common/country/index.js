/* global React */

import { actions } from 'data'
import { Loading } from 'components/common'

const map = ({ application: { language }, geo: { countries } }) => ({ language, countries })

class Country extends React.PureComponent {
  componentDidMount () {
    this.requestValue()
  }

  componentWillReceiveProps (nextProps) {
    this.requestValue(nextProps)
  }

  render () {
    const title = this.title()

    if (title == null) {
      return (
        <div>
          <Loading size='small' />
        </div>
      )
    }

    return (
      <div>
        {title}
      </div>
    )
  }

  requestValue (props) {
    const { value, actions: { geo: { getCountry } } } = { ...this.props, ...(props || { }) }
    const title = this.title(props)

    if (title != null) { return }

    getCountry(value)
  }

  title (props) {
    const { language, countries, value } = { ...this.props, ...(props || { }) }
    return countries[`${language}_${value}`]
  }
}

export default actions(map)(Country)
