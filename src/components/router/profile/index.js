import classNames from 'classnames'
import { compose, path } from 'ramda'
import { Button, Card, CardActions, CardContent, TextField } from 'material-ui'
import { withStyles } from 'material-ui/styles'

import { Application } from 'layouts'
import { CountrySelect, InputMasked } from 'components/common'
import { actions } from 'data'
import { text } from 'resources'

import Avatar from './avatar'
import classes from './classes'

const map = ({ application: { language }, user: { isReady, inProgress, ...form } }) => ({
  language, isReady, inProgress, form
})

const FormInput = ({ type, field, inProgress, placeholder, form, setValue }) => {
  const upperKey = `${field[0].toUpperCase()}${field.substring(1)}`
  const value = form[field]
  const formValue = form[`form${upperKey}`]
  const actual = formValue == null ? value : formValue

  switch (type) {
    case 'text':
      return (
        <TextField
          fullWidth
          label={placeholder}
          value={actual}
          disabled={inProgress}
          onChange={compose(setValue.bind(null, `form${upperKey}`), getValue)}
        />
      )

    case 'phone':
      return (
        <InputMasked
          fullWidth
          mask={InputMasked.phone}
          label={placeholder}
          value={actual}
          disabled={inProgress}
          onChange={compose(setValue.bind(null, `form${upperKey}`), getValue)}
        />
      )

    case 'country':
      return (
        <CountrySelect
          value={actual}
          onChange={compose(setValue.bind(null, `form${upperKey}`), getValue)}
        />
      )
  }
}

export default withStyles(classes)(actions(map)(({
  language, isReady, inProgress, form,
  classes,
  actions: { user: { update, setValue, uploadAvatar } }
}) => {
  const t = text(language, 'profile')

  return (
    <Application loading={!isReady} header={t('header')}>
      <Card classes={{ root: classes.root }}>
        <CardContent classes={{ root: classes.root }}>
          <div className={classes.row}>
            <Avatar uploadText={t('upload')} avatar={form.avatar} onChange={uploadAvatar} />
            <div className={classNames(classes.fullWidth, classes.right)}>
              <div className={classNames(classes.fullWidth, classes.row)}>
                <FormInput
                  field='firstName'
                  type='text'
                  inProgress={inProgress}
                  form={form}
                  setValue={setValue}
                  placeholder={t('firstName')}
                />
                <FormInput
                  field='lastName'
                  type='text'
                  inProgress={inProgress}
                  form={form}
                  setValue={setValue}
                  placeholder={t('lastName')}
                />
              </div>
              <div className={classNames(classes.fullWidth, classes.row)} style={{ marginTop: 0 }}>
                <FormInput
                  field='country'
                  type='country'
                  inProgress={inProgress}
                  form={form}
                  setValue={setValue}
                  placeholder={t('firstName')}
                />
              </div>
            </div>
          </div>
          <div className={classNames(classes.fullWidth, classes.row)}>
            <FormInput
              field='email'
              type='text'
              inProgress={inProgress}
              form={form}
              setValue={setValue}
              placeholder={t('email')}
            />
          </div>
          <div className={classNames(classes.fullWidth, classes.row)}>
            <FormInput
              field='website'
              type='text'
              inProgress={inProgress}
              form={form}
              setValue={setValue}
              placeholder={t('website')}
            />
          </div>
        </CardContent>
        <CardActions classes={{ root: classes.alignRight }}>
          <Button
            onClick={update}
            disabled={inProgress || !inputs.reduce(needUpdate.bind(null, form), false)}
            color='primary'
            variant='raised'
          >
            {t('save')}
          </Button>
        </CardActions>
      </Card>
    </Application>
  )
}))

const getValue = path.bind(null, [ 'target', 'value' ])
const needUpdate = (form, needUpdate, field) => {
  const upperKey = `${field[0].toUpperCase()}${field.substring(1)}`
  const value = form[field]
  const formValue = form[`form${upperKey}`]

  return needUpdate || (formValue != null && formValue !== value)
}

const inputs = [ 'firstName', 'lastName', 'country', 'email', 'website' ]
