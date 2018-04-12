export default ({
  palette: { grey },
  transitions: { duration, easing }
}) => ({
  root: {
    marginBottom: 24
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    '& > div': {
      flex: 1,
      margin: '8px'
    },
    display: 'flex',
    flexDirection: 'row'
  },
  filter: {
    '& > div': {
      flex: 1,
      margin: '8px 0'
    },
    height: 320
  },
  text: {
    display: 'flex',
    color: grey[700],
    alignItems: 'center',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    height: 32,
    fontSize: '13px',
    opacity: 1,
    transition: `all ${duration.standard}ms ${easing.easeInOut}`
  },
  hide: {
    height: 0,
    opacity: 0,
    margin: '0 !important'
  }
})
