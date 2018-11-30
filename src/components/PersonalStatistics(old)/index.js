import React from 'react'
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

const data = [
  {
    day: 'Mon',
    hours: 6,
    productivity: 85
  },
  {
    day: 'Tue',
    hours: 8,
    productivity: 80
  },
  {
    day: 'Wed',
    hours: 5,
    productivity: 90
  },
  {
    day: 'Thu',
    hours: 7,
    productivity: 85
  },
  {
    day: 'Fri',
    hours: 9,
    productivity: 70
  }
]

const types = [
  {
    actType: 'Coding',
    value: 35
  },
  {
    actType: 'Web Search',
    value: 30
  },
  {
    actType: 'Comunication',
    value: 15
  },
  {
    actType: 'Documentation',
    value: 5
  },
  {
    actType: 'Other',
    value: 5
  },
  {
    actType: 'Smth',
    value: 100
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

class PersonalStatistics extends React.Component {
  render() {
    return (
      <div className={styles.chartView}>
        <h1 className={styles.h1}>Ihar&#39;s performance this week</h1>
        <ComposedChart width={540} height={180} data={data}
                       margin={{ top: 25, right: 120, left: 120, bottom: 25 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='day' />
          <YAxis label={{ offset: 13, value: 'Hours', position: 'top' }} width={1} yAxisId='left' dataKey='hours' />
          <YAxis label={{ offset: 13, value: 'Productivity', position: 'top' }} width={1} yAxisId='right' dataKey='productivity' orientation='right' />
          <Tooltip payload={data} />
          <Bar yAxisId='left' dataKey='hours' barSize={30} fill='#8884d8' />
          <Line yAxisId='right' dataKey='productivity' stroke='#82ca9d' />
        </ComposedChart>

        <h2 className={styles.h2}>Hours spent: 38h</h2>
        <BarChart width={540} height={180} data={types} layout='vertical'
          margin={{ top: 25, right: 120, left: 120, bottom: 25 }}>
            <XAxis type='number' height={0} dataKey='value' domain={[0, 100]} interval={5} axisLine={false} tickLine={false} />
            <YAxis yAxisId='left' dataKey='actType' type='category' width={0} axisLine={false} tickLine={false}/>
            <Tooltip payload={types} />
            <Bar yAxisId='left' dataKey='value' fill='#82ca9d'>
              <LabelList dataKey='actType' position='left' content={<BarLabel/>}  />
              <LabelList dataKey='value' position='left' offset={-340} formatter={(l) => l + '%'}  />
            </Bar>
        </BarChart>

        <h2 className={styles.h2}>Code Analysis</h2>
        <div className={styles.analysis}>
          <p>
            <span className={styles.category}>Team rank:&nbsp;</span>
            <span className={styles.value}>2nd</span>
          </p>
          <p>
            <span className={styles.category}>Average productivity:&nbsp;</span>
            <span className={styles.value}>80%</span>
          </p>
          <h3>Metrics and comparision with team average:&nbsp;</h3>
          <div className={styles.comparison}>
            <p>
              <span className={styles.category}>Lines of code:&nbsp;</span>
              <span className={styles.value}>752 <span style={{color: 'green'}}>(+30%)</span></span>
            </p>
            <p>
              <span className={styles.category}>Pull requests opened:&nbsp;</span>
              <span className={styles.value}>4 <span style={{color: 'green'}}>(+35%)</span></span>
            </p>
            <p>
              <span className={styles.category}>Comments on pull request:&nbsp;</span>
              <span className={styles.value}>20 <span style={{color: 'red'}}>(-10%)</span></span>
            </p>
            <p>
              <span className={styles.category}>Code coverage:&nbsp;</span>
              <span className={styles.value}>82% <span style={{color: 'green'}}>(+5%)</span></span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonalStatistics