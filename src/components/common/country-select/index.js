/* global React */

import { TextField } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import Autosuggest from 'react-autosuggest'
import uuid from 'uuid'

import { text } from 'resources'
import { actions } from 'data'

import classes from './classes'
import { Suggestion, Container } from './suggestion'

const map = ({
  application: {
    language
  },
  geo: {
    countries,
    searches
  }
}) => ({
  language,
  countries,
  searches
})

class CountrySelect extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = { }
  }

  componentDidMount () {
    const component = uuid.v4()
    this.setState({ component })
    this.requestValue()
  }

  componentWillUnmount () {
    const { component } = this.state
    const { actions: { geo: { deleteSearch } } } = this.props

    if (component) { return }
    deleteSearch(component)
  }

  componentWillReceiveProps (nextProps) {
    this.requestValue(nextProps)
  }

  render () {
    const { component } = this.state
    const { language, searches, classes } = this.props
    const t = text(language, 'countries')
    const searchItem = searches[component] || { q: null, result: [] }
    const actual = this.actual()

    return (
      <div className={classes.root}>
        <Autosuggest
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          inputProps={{
            fullWidth: true,
            label: t('label'),
            value: (searchItem.q === null && actual ? actual.title : searchItem.q) || '',
            onChange: this.onChangeQ
          }}
          onSuggestionSelected={this.onChange}
          suggestions={this.suggestions()}
          getSuggestionValue={({ id }) => (id)}
          renderInputComponent={({ ref: inputRef, ...props }) => (
            <TextField InputProps={{ inputRef }} {...props} />
          )}
          renderSuggestionsContainer={Container}
          renderSuggestion={Suggestion}
          onSuggestionsFetchRequested={this.onChangeQ}
          onSuggestionsClearRequested={this.onClearQ}
        />
      </div>
    )
  }

  onChangeQ = ({ target, value: _value }) => {
    const { value } = target || { }
    const { component } = this.state
    const { searches } = this.props
    const searchItem = searches[component] || { q: null, result: [] }
    if ((_value || value) === searchItem.q) { return }

    this.search(_value == null ? value : _value)
  }

  onClearQ = () => {
    setTimeout(() => {
      const { component } = this.state
      const { actions: { geo: { clearSearch } }, searches } = this.props
      const searchItem = searches[component] || { q: null, result: [] }

      if (searchItem.q === '') { return }
      clearSearch({ component })
    }, 100)
  }

  onChange = (event, { suggestionValue: value }) => {
    const { onChange } = this.props

    onChange && onChange({ target: { value } })
  }

  search (value) {
    const { component, q } = this.state
    const { actions: { geo: { search } } } = this.props

    search({ type: 'country', component }, value == null ? q : value)
  }

  suggestions () {
    const { component } = this.state
    const { searches } = this.props
    const searchItem = searches[component]
    const actual = this.actual()

    if (searchItem == null || !Array.isArray(searchItem.result)) { return [] }
    if (actual && (searchItem.q === actual.title || searchItem.q === '' || searchItem.q == null)) { return [] }

    return searchItem.result
  }

  actual (props) {
    const { language, value, countries } = props || this.props
    const title = countries[`${language}_${value}`]

    if (value == null || title == null) { return null }
    return { id: value, title }
  }

  requestValue (props) {
    const { value, actions: { geo: { getCountry } } } = { ...this.props, ...(props || { }) }
    const actual = this.actual(props)

    if (actual != null) { return }
    getCountry(value)
  }
}

export default withStyles(classes, {})(actions(map)(CountrySelect))
