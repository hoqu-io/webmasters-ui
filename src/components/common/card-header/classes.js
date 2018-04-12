const SIZE = 64

export default () => ({
  header: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196f3',
    width: SIZE,
    height: SIZE,
    top: -20,
    left: 16,
    color: '#ffffff'
  },
  text: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    top: 0,
    left: 96,
    width: 'calc(100% - 80px)',
    height: 42,
    color: 'rgba(0, 0, 0, .54)',
    fontSize: 18
  },
  stub: {
    position: 'relative',
    left: 0,
    top: 0,
    width: '100%',
    height: 40
  }
})
