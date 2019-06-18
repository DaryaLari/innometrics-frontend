import React from 'react'
import Chart from 'react-google-charts'
import { connect } from 'react-redux'
import { activitiesSummarized } from '../../../helpers/selectors'
import Spinner from '../../Spinner'
import styles from './style.css'

class ChartView extends React.Component {
  render() {
    return (
      <div className={styles.chartView}>
        <Chart
          // width={'500px'}
          height={`${this.props.activities.length * 30}px`}
          chartType='BarChart'
          loader={<Spinner/>}
          data={[['Activity', 'Duration (min)', { role: 'annotation' }]]
            .concat(this.props.activities.map(a => {
              let time = Number(a.duration)
              const fromDays = 24 * 60 * 60,
                    fromHours = 60 * 60,
                    fromMinutes = 60
              const days = Math.floor(time / fromDays)
              time -= days * fromDays
              const hours = Math.floor(time / fromHours)
              time -= hours * fromHours
              const minutes = Math.floor(time / fromMinutes)
              const seconds = Math.round(time - minutes * fromMinutes)
              const formatted = (x) => (x < 10 ? '0' : '') + x
              return [
                a.executable_name, a.duration / 60,
                `${days > 0 ? days + 'days\n' : ''} ${formatted(hours)}:${formatted(minutes)}:${formatted(seconds)}`
              ]
            }))
          }
          options={{
            title: 'Time spend for activities',
            // chartArea: { width: '50%' },
            hAxis: {
              title: 'Time (min)',
            },
            vAxis: {
              title: 'Activity',
              minValue: 0,
            },
            legend: { position: 'none' },
            // bar: { groupWidth: '30px' },
          }}
        />
      </div>
    )
  }
}

const ConnectedChartView = connect(
  (state) => ({
    activities: activitiesSummarized(state)
  })
)(ChartView)

export default ConnectedChartView