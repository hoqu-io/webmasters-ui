export default theme => ({
  root: {
    position: 'relative',
    flex: 1,
    width: '100%',
    height: 48,
    overflow: 'visible'
  },
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 250
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  }
})
