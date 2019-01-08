import moment from 'moment'
import React from 'react'
import _ from 'lodash'
import Chart from 'react-google-charts'
import Spinner from '../Spinner'

const Tooltip = ({startTime, endTime, executable_name, browser_url}) => {
  return (
    `<div>
      <div>${executable_name}</div>
      <div>${browser_url}</div>
      <div>${startTime.format('H:mm:ss')} - ${endTime.format('H:mm:ss')}</div>
    </div>`
  )
}

class TimelineChart extends React.Component {
  render() {
    console.log(_.min([40.992 * this.props.activities.length, 600]))
    return (
      <Chart
       width={'100%'}
       height={_.min([40.992 * this.props.activities.length + 50, 600]) + 'px'}
       chartType="Timeline"
       loader={<div style={{width: '100%', height: '300px', position: 'relative'}}><Spinner style={{height: '300px'}}/></div>}
       data={
         [[
           { type: 'string', id: 'Activity' },
           { type: 'string', id: 'dummy bar label' },
           { type: 'string', role: 'tooltip', p: { html: true } },
           { type: 'date', id: 'Start' },
           { type: 'date', id: 'End' },
         ]].concat(this.props.activities.map(a => {
           const startTime = moment(a.start_time, 'YYYY-MM-DD HH:mm:ss'),
                 endTime = moment(a.end_time, 'YYYY-MM-DD HH:mm:ss')
           return [
             a.executable_name,
             `${a.executable_name}, ${a.browser_url} (${startTime.format('H:mm:ss')} - ${endTime.format('H:mm:ss')})`,
             Tooltip({startTime, endTime, ...a}),
             startTime.toDate(),
             endTime.toDate()
         ]}))}
       options={{
         // avoidOverlappingGridLines: false,
         timeline: {showBarLabels: false},
         tooltip: {isHtml: true},
         hAxis: {
           format: 'dd/MM/yyyy\nhh:mm:ss'
         }
       }}
      />

    )
  }
}

export default TimelineChart