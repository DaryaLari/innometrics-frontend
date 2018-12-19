import React from 'react'
import _ from 'lodash'
import PageTemplate from '../PageTemplate'
import PeriodPicker from '../PeriodPicker'
import GoalSection from './GoalSection'
import ComparizonChart from './ComparizonChart'
import TrendLineChart from './TrendLineChart'
import styles from './style.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

const activities = [
  {
    name: 'Total hours',
    duration: 38,
    trend: -2.7
  },
  {
    name: 'Coding',
    duration: 15,
    trend: +10
  },
  {
    name: 'Web search',
    duration: 12,
    trend: -18.2
  },
  {
    name: 'Communication',
    duration: 7,
    trend: +5.7
  },
  {
    name: 'Others',
    duration: 4,
    trend: -5.3
  }
]

const totalHours = [
  {
    day: 'Mon',
    actual: 14,
    average: 8,
    teamAvg: 3
  },
  {
    day: 'Tue',
    actual: 11,
    average: 13,
    teamAvg: 11
  },
  {
    day: 'Wed',
    actual: 8.5,
    average: 8.5,
    teamAvg: 2
  },
  {
    day: 'Thu',
    actual: 4,
    average: 7,
    teamAvg: 7
  },
  {
    day: 'Fri',
    actual: 7.5,
    average: 4,
    teamAvg: 12
  }
]

const codeMetrics = [
  {
    name: 'Lines of code',
    value: 732,
    trend: +12
  },
  {
    name: 'Pull requests',
    value: 6,
    trend: +20
  },
  {
    name: 'Comments on pull requsts',
    value: 3,
    trend: -22
  }
]

const locTrend = [
  {
    day: 'Mon',
    value: 63
  },
  {
    day: 'Tue',
    value: 94
  },
  {
    day: 'Wed',
    value: 82
  },
  {
    day: 'Thu',
    value: 118
  },
  {
    day: 'Fri',
    value: 97
  }
]

const OpenedTabTemplate = ({children, onClose}) => {
  return (
    <div className={styles.openedTabArea}>
      <div className={styles.chart}>
        {children}
      </div>
      <div className={styles.buttons}>
        <i className={`${'material-icons'} ${styles.closeIcon}`}
           onClick={onClose}
        >
          close
        </i>
        <div className={styles.moreButton}>
          <i className={`${'material-icons'}`}
          >
            arrow_forward_ios
            {/*chevron_right*/}
          </i>
          More...
        </div>
      </div>
    </div>
  )
}

class StatisticsPage extends React.Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    opened: {
      activities: null,
      metrics: null
    }
  }
  closeChart = (type) => {
    let newState = this.state
    newState.opened[type] = null
    this.setState(newState)
  }

  openChart = (type, name) => {
    if(_.get(this.state.opened, type + '.name') === name)
      this.closeChart(type)
    else {
      let newState = this.state
      newState.opened[type] = {name}
      this.setState(newState)
    }
  }
  handlePeriodChange = (source, date) => {
    let newState = this.state
    newState[source] = date
    if(newState.startDate.getTime() > newState.endDate.getTime()){
      newState.startDate = [newState.endDate, newState.endDate = newState.startDate][0] // swap
    }
    this.setState(newState)
  }
  render() {
    const testeeName = this.props.match.params.projectName ?
                        `'${this.props.match.params.projectName}' team`
                        : 'My'
    return (
      <PageTemplate title={testeeName + ' performance'}
                    restHeader={<PeriodPicker handlePeriodChange={this.handleChange}
                                              startDate={this.state.startDate}
                                              endDate={this.state.endDate}
                                />}
      >
        <GoalSection goalName='Effort estimation'/>

        <GoalSection goalName='Use of resources'>
          <div className={styles.tiles}>
            {activities.map(a => (
              <div className={_.get(this.state.opened, 'activities.name') === a.name ? styles.tileActive : styles.tile}
                   key={a.name}
                   onClick={() => this.openChart('activities', a.name)}
              >
                <span className={styles.metricValue}>{a.duration} h</span>
                <span className={styles.metricName}>{a.name}</span>
                <span className={a.trend > 0 ? styles.positiveTrend : styles.negativeTrend}>
                  <i className={`${'material-icons'} ${styles.trendArrow}`}>
                    {a.trend > 0 ? 'arrow_upward' : 'arrow_downward'}
                  </i>
                  {a.trend}%
                </span>
              </div>
            ))}
          </div>
          {this.state.opened.activities !== null && (
            <OpenedTabTemplate onClose={() => this.closeChart('activities')}>
              <ComparizonChart data={totalHours}/>
            </OpenedTabTemplate>
          )}
        </GoalSection>

        <GoalSection goalName='Software quality and development process'>
          <div className={styles.tiles}>
            {codeMetrics.map(m => (
              <div className={_.get(this.state.opened, 'metrics.name') === m.name ? styles.tileActive : styles.tile}
                   key={m.name}
                   onClick={() => this.openChart('metrics', m.name)}>
                <span className={styles.metricValue}>{m.value} h</span>
                <span className={styles.metricName}>{m.name}</span>
                <span className={m.trend > 0 ? styles.positiveTrend : styles.negativeTrend}>
                  <i className={`${'material-icons'} ${styles.trendArrow}`}>
                    {m.trend > 0 ? 'arrow_upward' : 'arrow_downward'}
                  </i>
                  {m.trend}%
                </span>
              </div>
            ))}
          </div>

          {this.state.opened.metrics !== null && (
            <OpenedTabTemplate onClose={() => this.closeChart('metrics')}>
              <TrendLineChart data={locTrend} yName={this.state.opened.metrics.name}/>
            </OpenedTabTemplate>
          )}
        </GoalSection>

      </PageTemplate>
    )
  }
}

export default StatisticsPage