export default {
  card: {
    margin: '10px',
    backgroundColor: '#1b2d70',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    fontSize: '12px',
    width: '420px',
    height: '220px',
    '& div:last-child': {
      paddingBottom: '16px'
    }
  },
  cardHeader: {
    width: '100%',
    marginBottom: '0',
    paddingBottom: '0',
    paddingTop: '5px'
  },
  avatar: {
    margin: '0',
    '&.img': {
      height: '20px',
      width: '20px'
    }
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: '30px'
  },
  subheader: {
    textAlign: 'center',
    color: '#d3d3d3'
  },
  cardContent: {
    paddingTop: '0',
    paddingBottom: '10px',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    '& > p': {
      marginTop: '25px'
    },
    '& > a': {
      marginTop: 'auto'
    },
    '& > button': {
      marginTop: 'auto'
    }
  },
  '@media only screen and (max-width: 425px)': {
    card: {
      width: '100%',
      fontSize: '14px'
    }
  }
}
