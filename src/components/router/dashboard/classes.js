export default {
  buttonContainer: {
    marginTop: '12px',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  chartBlock: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '16px',
    '& > div': {
      marginRight: '16px',
      flex: '1'
    },
    '& > div:last-child': {
      marginRight: '0'
    }
  },
  cardBlock: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '16px',
    '& > div': {
      flex: '1',
      marginRight: '16px'
    },
    '& > div:last-child': {
      marginRight: '0'
    }
  },
  cardHeader: {
    padding: '16px 20px 0 20px'
  },
  cardHeaderTitle: {
    fontSize: '18px',
    fontWeight: 'normal'
  },
  cardContent: {
    padding: '12px 20px 16px 20px !important'
  },
  cardContentTable: {
    padding: '0 0 12px 0 !important',
    '& > div:last-child': {
      marginRight: '12px'
    }
  },
  chartContainer: {
    '&>div': {
      overflow: 'hidden'
    },
    position: 'relative',
    overflow: 'hidden',
    minWidth: '200px'
  },
  chart: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
    paddingTop: '20px'
  },
  managerAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginTop: '8px'
  },
  managerContact: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
    '& > *:first-child': {
      marginRight: '10px',
      width: '15px',
      height: '15px'
    }
  },
  managerContent: {
    display: 'flex'
  },
  newsItem: {
    padding: '7px 0'
  },
  phoneNumber: {
    width: '500px !important'
  },
  subheading: {
    fontWeight: '500'
  },
  table: {
    tableLayout: 'fixed',
    '& > thead': {
      '& > tr': {
        '&:hover': {
          backgroundColor: 'white'
        }
      }
    }
  },
  tableContainer: {
    overflowX: 'auto'
  },
  tableRow: {
    '& > *': {
      padding: '0 20px'
    },
    '&:hover': {
      backgroundColor: '#e4e4e4'
    }
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '15px'
  },
  textContainerText: {
    width: '100%'
  },
  textContainerPicture: {
    width: '55px',
    height: '55px',
    marginRight: '15px',
    borderRadius: '50%'
  },
  widgetsBlock: {
    display: 'flex',
    flexDirection: 'row'
  },
  widgetsLeft: {
    flex: '2',
    flexBasis: 'auto',
    width: '100%',
    maxWidth: '66%',
    '& > div:not(:first-child)': {
      marginTop: '16px'
    }
  },
  widgetsRight: {
    marginLeft: '16px',
    maxWidth: '33%',
    flex: '1',
    '& > div:not(:first-child)': {
      marginTop: '16px'
    }
  },
  '@media screen and (max-width:1190px) and (min-width:601px)': {
    cardBlock: {
      display: 'block',
      '& > div': {
        display: 'inline-block',
        width: 'calc(50% - 8px)'
      },
      '& > div:nth-child(2n)': {
        marginRight: '0'
      },
      '& > div:nth-child(-n + 2)': {
        marginBottom: '16px'
      }
    },
    managerContent: {
      flexDirection: 'column',
      '& > *:nth-child(2)': {
        marginTop: '15px'
      }
    }
  },
  '@media screen and (max-width:600px)': {
    cardBlock: {
      display: 'block',
      '& > div': {
        display: 'block',
        width: '100%',
        marginBottom: '16px'
      }
    }
  },
  '@media screen and (max-width:1190px)': {
    chartBlock: {
      display: 'block',
      '& > div': {
        marginRight: '0px'
      },
      '& > div:last-child': {
        marginTop: '16px'
      }
    }
  },
  '@media screen and (max-width:800px)': {
    widgetsBlock: {
      flexDirection: 'column'
    },
    widgetsLeft: {
      maxWidth: '100%'
    },
    widgetsRight: {
      maxWidth: '100%',
      marginLeft: '0',
      '& > div': {
        marginTop: '16px'
      }
    },
    managerContent: {
      flexDirection: 'row',
      '& > *:nth-child(2)': {
        marginTop: '0px'
      }
    }
  }
}
