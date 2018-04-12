import { TextField } from 'material-ui'

import { phone } from 'consts'

const inputMasked = ({ value, mask, ...props }) => {
  const error = mask == null ? false : !mask.test(value)

  return (
    <TextField
      {...props}
      value={value}
      error={error}
      helperText={error ? '+01234567890' : null}
    />
  )
}

inputMasked.phone = phone.regexp

export default inputMasked
