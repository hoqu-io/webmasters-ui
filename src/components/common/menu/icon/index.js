import Bitcointalk from './bitcointalk'
import Facebook from './facebook'
import Instagram from './instagram'
import Medium from './medium'
import Telegram from './telegram'
import Youtube from './youtube'

export default ({ icon, ...props }) => {
  if (icon == null || ICONS[icon] == null) { return null }
  const Component = ICONS[icon]

  return (<Component {...props} />)
}

const ICONS = {
  bitcointalk: Bitcointalk,
  facebook: Facebook,
  instagram: Instagram,
  medium: Medium,
  telegram: Telegram,
  youtube: Youtube
}
