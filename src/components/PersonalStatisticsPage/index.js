import React from 'react'
import ComparizonChart from './ComparizonChart'
import styles from './style.css'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart, LabelList,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import TrendLineChart from './TrendLineChart'

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

const BarLabel = ({value, x, y, height, offset, content, ...rest}) => {
  return (
    <text x={0} y={y + height/2 + offset} textAnchor='left'>
      {value}
    </text>
  )
}

const YAxisLabel = ({value, x, y, height, offset, content, ...rest}) => {
  console.log(rest)
  return (
    <text x={0} y={10} textAnchor='center'>
      Hours
    </text>
  )
}

class PersonalStatisticsPage extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <h1 className={styles.title}>Ihar&#39;s performance</h1>

        <div className={styles.panel}>
          <div className={styles.tiles}>
            {activities.map(a => (
              <div className={styles.tile} key={a.name}>
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
          <div className={styles.chart}>
            <i className={`${'material-icons'} ${styles.closeIcon}`}
               onClick={() => {}}
            >
              highlight_off
            </i>
            <ComparizonChart data={totalHours}/>
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.tiles}>
            {codeMetrics.map(m => (
              <div className={styles.tile} key={m.name}>
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

          <div className={styles.chart}>
            <i className={`${'material-icons'} ${styles.closeIcon}`}
               onClick={() => {}}
            >
              highlight_off
            </i>
            <TrendLineChart data={locTrend} yName={'LOC'}/>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonalStatisticsPage