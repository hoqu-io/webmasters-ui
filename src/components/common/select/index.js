import { Checkbox, FormControl, InputLabel, MenuItem, Select } from 'material-ui'
import { withStyles } from 'material-ui/styles'

import classes from './classes'

export default withStyles(classes)(({ classes, items, value, label, ...props }) => (
  <FormControl classes={{ root: classes.root }}>
    {label == null ? null : <InputLabel>{label}</InputLabel>}
    <Select
      value={value}
      renderValue={renderValue.bind(null, { items })}
      {...props}
    >
      {items.map(({ id, name }) => (
        <MenuItem key={id} value={id}>
          <Checkbox checked={(value || []).indexOf(id) > -1} />
          {name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
))

const renderValue = ({ items }, value) => Array.isArray(value)
  ? value.map((v) => (items.find(({ id }) => (id === v)) || {}).name).filter((i) => (i != null)).join(', ')
  : (items.find(({ id }) => (id === value)) || {}).name
