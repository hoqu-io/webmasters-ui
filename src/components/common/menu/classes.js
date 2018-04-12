import logo from './logo.png'

const WIDTH = '230px'
const HIDDEN_WIDTH = '0px'
const BACKGROUND = '#333c44'
const COLOR = '#a8acb1'

export default {
  container: {
    left: '0',
    width: WIDTH,
    minWidth: WIDTH,
    height: '100%',
    transition: 'width 300ms, min-width 300ms',
    backgroundColor: BACKGROUND,
    color: COLOR,
    overflowX: 'hidden',
    overflowY: 'auto',
    paddingTop: '0',
    zIndex: '1000'
  },
  containerHeader: {
    height: '56px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px',
    alignItems: 'center'
  },
  icon: {
    height: '18px',
    width: '18px'
  },
  logo: {
    position: 'relative',
    width: '86px',
    height: '30px',
    background: `url(${logo}) no-repeat center center`,
    backgroundSize: 'contain',
    cursor: 'pointer'
  },
  list: {
    padding: '0',
    backgroundColor: '#1a2229'
  },
  listItem: {
    padding: '15px 20px',
    fontSize: '14px',
    '& div:nth-child(2)': {
      paddingLeft: '10px'
    }
  },
  listItemSelected: {
    backgroundColor: '#1a2229',
    '& > *': {
      color: 'white !important'
    }
  },
  color: {
    color: '#ffffff',
    '& > svg': {
      color: '#ffffff'
    }
  },
  activeColor: {
    color: '#ffffff',
    backgroundColor: '#d41b66',
    '& > svg': {
      color: '#ffffff'
    },
    '&:hover': {
      backgroundColor: '#d41b66'
    }
  },
  text: {
    whiteSpace: 'nowrap'
  },
  hide: {
    width: `${HIDDEN_WIDTH} !important`,
    minWidth: `${HIDDEN_WIDTH} !important`
  },
  subheading: {
    color: '#6d7983',
    fontSize: '13px',
    margin: '15px 0 10px 12px'
  },
  dot: {
    height: '14px',
    width: '14px',
    marginLeft: '3px'
  },
  collapseUp: {
    width: '0',
    height: '0',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '5px solid #a1a1a1'
  },
  collapseDown: {
    width: '0',
    height: '0',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderTop: '5px solid #a1a1a1'
  }
}
