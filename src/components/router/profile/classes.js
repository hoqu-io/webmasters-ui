export default ({
  palette: { primary, grey },
  transitions: { duration, easing }
}) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fullWidth: {
    '& > div': { marginLeft: 12, marginTop: 16 },
    flex: 1
  },
  right: {
    position: 'relative',
    top: -32
  },
  alignRight: {
    justifyContent: 'flex-end',
    marginRight: 4,
    marginBottom: 8
  },
  '@media (max-width: 600px)': {
    row: {
      flexDirection: 'column',
      marginTop: 0
    },
    fullWidth: {
      '& > div': { marginLeft: 0, marginTop: 16 },
      width: '100%'
    },
    right: {
      position: 'relative',
      top: 0
    }
  }
})
