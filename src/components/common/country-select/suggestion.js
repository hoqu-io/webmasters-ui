import { MenuItem, Paper } from 'material-ui'

import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'

const Suggestion = ({ title }, { query, isHighlighted }) => (
  <MenuItem selected={isHighlighted} component='div'>
    <div>
      {parse(title, match(title, query)).map(({ highlight, text }, index) => (
        highlight
          ? (<span key={index} style={{ fontWeight: 300 }}>{text}</span>)
          : (<strong key={index} style={{ fontWeight: 500 }}>{text}</strong>)
      ))}
    </div>
  </MenuItem>
)

const Container = ({ containerProps, children }) => (
  <Paper {...containerProps} square>
    {children}
  </Paper>
)

export {
  Suggestion,
  Container
}
