import Chart from 'echarts-for-react'
import CHARTCONFIG from './chart-config'
import 'echarts/lib/component/markArea'

// props:
//  title (string)     : title of the chart
//  xAxisLabel (array) : labels of the x axis of the chart
//                       (usually used for week display)
//  yAxisData (array)  : data on which the charts are based, consists of
//                       objects
//    yAxisData object from the array has the following properties:
//      name (string)    : the name of the data, (default: '')
//      index (number)   : the yAxis of this chart, 0 - left, 1 - right
//                         (default: '0')
//      color (string)   : color of the data (default: red)
//      data (array)     : array of numbers, from which the chart will be built
//      type (string)    : type of chart, all echart types are available
//      smooth (boolean) : smoothing for line type (default: true)
//      area (boolean)   : show area on the line type chart (default: false)
//  yAxisRightMax     : max value of right y axis (optional, default: max in table)
//  boundaryGap       : should the chart have boundary gap (default: false)

export default ({
  title,
  xAxisLabel,
  yAxisData,
  yAxisRightMax,
  boundaryGap
}) => {
  const config = {
    title: {
      text: title,
      left: 10,
      textStyle: {
        fontFamily: 'Roboto',
        verticalAlign: 'top',
        fontWeight: 'normal'
      }
    },
    legend: {
      type: 'plain'
    },
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      show: false
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        boundaryGap: boundaryGap,
        data: xAxisLabel,
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
        max: null,
        axisLabel: {
          textStyle: {
            color: CHARTCONFIG.color.text
          }
        }
      },
      (yAxisData.some(item => item.hasOwnProperty('index')) && {
        type: 'value',
        min: 0,
        max: yAxisRightMax || null,
        splitLine: {
          show: false
        }
      })
    ],
    series: yAxisData.map(({ name, index, color, data, type, smooth, area }) => (
      {
        name,
        type: type || 'line',
        smooth: true,
        yAxisIndex: index || 0,
        itemStyle: {
          normal: {
            color: color
          }
        },
        lineStyle: {
          normal: {
            color: color
          }
        },
        data,
        symbol: 'circle',
        areaStyle: area ? {} : null
      }
    ))
  }

  return (
    <Chart
      style={{ height: '300px', width: '100%' }}
      notMerge
      lazyUpdate
      option={config}
    />
  )
}
