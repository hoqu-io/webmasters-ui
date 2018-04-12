import { hoqu } from 'resources/images'

export default {
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    minWidth: 400,
    maxWidth: 500,
    margin: 4
  },
  avatar: {
    background: `url(${hoqu}) no-repeat center center;`,
    backgroundSize: 'contain'
  },
  media: {
    height: 194
  },
  left: {
    flex: 1
  }
}
