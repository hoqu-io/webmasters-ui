import avatar from './avatar.png'

export default ({
  palette: { primary, grey },
  transitions: { duration, easing }
}) => ({
  root: {
    '&:hover > div': {
      borderColor: primary.main
    }
  },
  avatar: {
    borderRadius: '100%',
    border: `solid 4px ${grey[400]}`,
    width: 96,
    minWidth: 96,
    maxWidth: 96,
    height: 96,
    backgroundImage: `url(${avatar})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    cursor: 'pointer',
    transition: `border-color ${duration.standard}ms ${easing.easeInOut}`,
    marginBottom: 8
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    color: grey[400],
    border: 'none',
    transition: `color ${duration.standard}ms ${easing.easeInOut}`
  }
})
