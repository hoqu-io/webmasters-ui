export default {
  container: {
    display: 'flex',
    width: '100%',
    maxWidth: '100%',
    height: '100vh',
    overflow: 'hidden'
  },
  content: {
    marginTop: '57px',
    display: 'flex',
    width: '100%',
    height: 'calc(100% - 57px)',
    alignItems: 'flex-start',
    justifyContent: 'left',
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  contentInner: {
    width: '100%'
  },
  contentChildren: {
    margin: '24px',
    maxWidth: 'calc(100% - 48px)',
    minHeight: 'calc(100vh - 161px)',
    flex: '1'
  },
  loading: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pageHeader: {
    color: '#2196f3',
    fontSize: '24px'
  },
  margin: {
    height: 48
  }
}
