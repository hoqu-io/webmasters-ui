import { compose, path } from 'ramda'
import {
  Avatar,
  Button,
  Card, CardActions, CardContent, CardHeader,
  Collapse,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from 'material-ui'
import { Close } from 'material-ui-icons'

import { InputMasked } from 'components/common'

export default ({
  offer: { ads, description, rules, logo, isAddAdVisible, phone, wallet, isAddInProgress, ...other },
  wallets,
  actions: { offers: { hideNewAd, saveAd, setOfferPhone, setOfferWallet } },
  classes,
  t
}) => (
  <div className={classes.content}>
    <Collapse in={isAddAdVisible}>
      <Card>
        <CardHeader
          avatar={(<Avatar src={logo} className={classes.avatar} />)}
          action={<IconButton onClick={hideNewAd}><Close /></IconButton>}
          title={t('new')}
        />
        <CardContent classes={{ root: classes.form }}>
          <InputMasked
            mask={InputMasked.phone}
            fullWidth
            value={phone || ''}
            onChange={compose(setOfferPhone, getValue)}
            label={t('phone')}
            disabled={isAddInProgress}
          />
          {!Array.isArray(wallets) && wallets.length > 0 ? null : (
            <FormControl fullWidth disabled={isAddInProgress}>
              <InputLabel>{t('wallet')}</InputLabel>
              <Select
                fullWidth
                value={wallet || wallets[wallets.length - 1].address}
                onChange={compose(setOfferWallet, getValue)}
                native={false}
              >
                {wallets.map(({ address, name }) => (
                  <MenuItem key={address} value={address}>{`${name || t('empty')} (${address})`}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </CardContent>
        <CardActions classes={{ root: classes.actions }}>
          <Button color='primary' onClick={saveAd}>
            {t('save')}
          </Button>
        </CardActions>
      </Card>
    </Collapse>
    {(Array.isArray(ads) ? ads : []).map(({ beneficiary_address: beneficiaryAddress, phone, id }, key) => (
      <Card key={key} classes={{ root: classes.card }}>
        <CardHeader
          avatar={(<Avatar src={logo} className={classes.avatar} />)}
          title={`${phone} (${beneficiaryAddress})`}
          subheader={<a target='_blank' href={`http://blockchain.hoqu.io/landing?id=${id}`}>LINK</a>}
        />
      </Card>
    ))}
  </div>
)

const getValue = path.bind(null, [ 'target', 'value' ])
