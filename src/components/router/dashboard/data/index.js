import CHARTCONFIG from './chart-config'

const earned = {
  title: {
    text: 'Earned & Spent',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params, ticket, callback) {
      var res = ''
      for (var i = 0, l = params.length; i < l; i++) {
        res += params[i].name + '<br />Earned: ' + params[i].value * 10000
      }
      return res
    }
  },
  legend: {
    data: ['Earned', 'Spent'],
    textStyle: {
      color: CHARTCONFIG.color.text
    }
  },
  toolbox: {
    show: false
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      data: ['24/3', '25/3', '26/3', '27/3', '28/3', '29/3', '30/3'],
      axisLabel: {
        textStyle: {
          color: CHARTCONFIG.color.text
        }
      },
      splitLine: {
        lineStyle: {
          color: CHARTCONFIG.color.splitLine
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value}k',
        textStyle: {
          color: CHARTCONFIG.color.text
        }
      },
      splitLine: {
        lineStyle: {
          color: CHARTCONFIG.color.splitLine
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: CHARTCONFIG.color.splitArea
        }
      }
    }
  ],
  series: [
    {
      name: 'Revenue',
      type: 'line',
      data: [-42.302, -9.7, -10, 13.5444, 22, 15, 56.7345],
      itemStyle: {
        normal: {
          color: CHARTCONFIG.color.success
        }
      },
      lineStyle: {
        normal: {
          color: CHARTCONFIG.color.success
        }
      },
      symbol: 'circle'
    }
  ]
}

const leads = {
  title: {
    text: 'Total Leads',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Earned', 'Spent'],
    textStyle: {
      color: CHARTCONFIG.color.text
    }
  },
  toolbox: {
    show: false
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      data: ['24/3', '25/3', '26/3', '27/3', '28/3', '29/3', '30/3'],
      axisLabel: {
        textStyle: {
          color: CHARTCONFIG.color.text
        }
      },
      splitLine: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 152,
      axisLabel: {
        textStyle: {
          color: CHARTCONFIG.color.text
        }
      }
    },
    {
      type: 'value',
      min: 0,
      max: 100,
      splitLine: {
        show: false
      }
    }
  ],
  series: [
    {
      name: 'CR',
      type: 'line',
      yAxisIndex: 1,
      data: [100, 100, 100, 98, 100, 97, 100],
      itemStyle: {
        normal: {
          color: '#ffa81e'
        }
      },
      lineStyle: {
        normal: {
          color: CHARTCONFIG.color.success
        }
      },
      symbol: 'circle'
    },
    {
      name: 'Sold Leads',
      type: 'line',
      data: [54, 56, 132, 58, 152, 76, 69],
      itemStyle: {
        normal: {
          color: '#4286f4'
        }
      },
      lineStyle: {
        normal: {
          color: '#4286f4'
        }
      },
      symbol: 'circle'
    },
    {
      name: 'Total Leads',
      type: 'line',
      data: [54, 56, 132, 59, 152, 78, 69],
      itemStyle: {
        normal: {
          color: CHARTCONFIG.color.success
        }
      },
      lineStyle: {
        normal: {
          color: CHARTCONFIG.color.success
        }
      },
      symbol: 'circle'
    }
  ]
}

export default {
  earned,
  leads
}
