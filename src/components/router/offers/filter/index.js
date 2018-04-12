import classNames from 'classnames'
import { compose } from 'ramda'
import { Card, CardContent, Collapse, IconButton } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import * as Icons from 'material-ui-icons'

import { Search, Select } from 'components/common'
import { actions } from 'data'
import { text } from 'resources'
import classes from './classes'

const map = ({
  application: { language },
  offers: { isFilterVisible, filter, categories, promotionTypes, trafficTypes, promoTools, enrollment } }
) => ({
  language,
  isFilterVisible,
  filter,
  categories,
  promotionTypes,
  trafficTypes,
  promoTools,
  enrollment
})

export default actions(map)(withStyles(classes)(({
  language,
  isFilterVisible, filter,
  categories,
  promotionTypes,
  trafficTypes,
  promoTools,
  enrollment,
  classes,
  actions: { offers: { toggleFilterVisible, mergeFilter } }
}) => {
  const t = text(language, 'offers.filter')
  const fText = filterText(t, filter)
  const hideText = fText == null || fText === '' || isFilterVisible

  return (
    <Card classes={{ root: classes.root }}>
      <CardContent>
        <div className={classes.search}>
          <Search
            value={filter.q}
            onChange={compose(mergeFilter, getValue('q'))}
          />
          <IconButton onClick={toggleFilterVisible}>
            {isFilterVisible ? <Icons.ExpandLess /> : <Icons.ExpandMore />}
          </IconButton>
        </div>
        <Collapse
          in={isFilterVisible}
          collapsedHeight={hideText ? '0px' : '32px'}
        >
          <div className={classes.filter}>
            <div className={classNames(classes.text, { [classes.hide]: hideText })}>
              {fText}
            </div>
            <Select
              fullWidth
              multiple
              value={filter.categories}
              onChange={({ target: { value } }) => {
                mergeFilter({ categories: Array.isArray(value) ? value : [ value ] })
              }}
              label={t('categories.label')}
              items={categories.map((id) => ({ id, name: t(`categories.${id}`) }))}
            />
            <Select
              fullWidth
              multiple
              value={filter.promotionTypes}
              onChange={({ target: { value } }) => {
                mergeFilter({ promotionTypes: Array.isArray(value) ? value : [ value ] })
              }}
              label={t('promotionTypes.label')}
              items={promotionTypes.map((id) => ({ id, name: t(`promotionTypes.${id}`) }))}
            />
            <Select
              fullWidth
              multiple
              value={filter.trafficTypes}
              onChange={({ target: { value } }) => {
                mergeFilter({ trafficTypes: Array.isArray(value) ? value : [ value ] })
              }}
              label={t('trafficTypes.label')}
              items={trafficTypes.map((id) => ({ id, name: t(`trafficTypes.${id}`) }))}
            />
            <Select
              fullWidth
              multiple
              value={filter.promoTools}
              onChange={({ target: { value } }) => {
                mergeFilter({ promoTools: Array.isArray(value) ? value : [ value ] })
              }}
              label={t('promoTools.label')}
              items={promoTools.map((id) => ({ id, name: t(`promoTools.${id}`) }))}
            />
            <Select
              fullWidth
              value={filter.enrollment}
              onChange={({ target: { value } }) => { mergeFilter({ enrollment: value }) }}
              label={t('enrollment.label')}
              items={enrollment.map((id) => ({ id, name: t(`enrollment.${id}`) }))}
            />
          </div>
          <div className={classes.row} />
        </Collapse>
      </CardContent>
    </Card>
  )
}))

const filterText = (t, filter) => {
  const result = []
  FILTER_TYPES.forEach((key) => (
    filter[key].length > 0
      ? result.push(`${t(`${key}.label`)}: ${filter[key].map((i) => (t(`${key}.${i}`))).join(', ')}`)
      : null
  ))

  if (filter.enrollment !== 'all') {
    result.push(`${t(`enrollment.${filter.enrollment}`)}`)
  }

  return result.length === 0 ? '' : result.join(';')
}
const getValue = (key) => ({ target: { value } }) => ({ [key]: value })

const FILTER_TYPES = [ 'categories', 'promotionTypes', 'trafficTypes', 'promoTools' ]
