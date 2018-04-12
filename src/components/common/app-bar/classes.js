export default {
  appBar: {
    position: 'absolute',
    width: 'calc(100% - 230px)',
    marginLeft: '250px',
    backgroundColor: '#ffffff',
    minHeight: '56px !important',
    '& > div': {
      minHeight: '56px !important'
    },
    transition: 'width 300ms',
    zIndex: '999'
  },
  appBarColor: {
    color: '#000000 !important'
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  toolbar: {
    paddingLeft: '10px'
  },
  right: {
    display: 'flex',
    flex: '1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  hide: {
    width: `100% !important`
  },
  hideHamburger: {
    display: 'none'
  },
  menu: {
    marginTop: '36px'
  },
  accountMenuItem: {
    paddingRight: '60px',
    fontSize: '14px'
  },
  listItemIcon: {
    color: '#000'
  },
  '@media only screen and (max-device-width: 1024px)': {
    appBar: {
      '& > div': {
        padding: '0'
      }
    }
  }
}
