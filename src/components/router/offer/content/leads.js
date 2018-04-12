import { Avatar, Card, CardContent, CardHeader } from 'material-ui'

export default ({
  offer: { leads, ads, logo },
  classes
}) => {
  const _ads = (Array.isArray(ads) ? ads : []).reduce((r, ad) => {
    r[ad.id] = ad
    return r
  }, {})

  return (
    <div>
      {(Array.isArray(leads) ? leads : []).map((lead, index) => (
        <Card key={index} classes={{ root: classes.card }}>
          <CardHeader
            avatar={(<Avatar src={logo} />)}
            title={(_ads[lead.ad_id] || {}).beneficiary_address}
            subheader={`+${lead.price} HQX`}
          />
          <CardContent classes={{ root: classes.meta }}>
            {JSON.stringify(lead.meta)}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
