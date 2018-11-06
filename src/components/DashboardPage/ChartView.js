import React from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { activitiesSummarized } from '../../helpers/selectors'
import styles from "./style.css";

class ChartView extends React.Component {
  render() {
    const activities = activitiesSummarized(this.props.activities)
    return (
      <div className={styles.chartView}>
        <ResponsiveContainer width={'100%'} aspect={2}>
          <BarChart data={activities}
                    margin={{ top: 25, right: 50, left: 50, bottom: 25 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="executable_name"
                   label={{ offset: 0, value: "Activity", position: 'bottom' }}
                   height={25}
                   axisLine={false}
                   tickLine={false}
                   interval={0}
                   tick={<CustomTick amount={activities.length}/>}
            />
            <YAxis label={{ offset: 13, value: "Duration (sec)", position: 'top' }} dataKey="duration" />
            <Tooltip payload={activities} />
            <Bar dataKey="duration" barSize={30} fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

class CustomTick extends React.Component{
  render(){
    const {x, y, payload, ...rest} = this.props
    let width = rest.width/rest.amount - 5
    return (
      <foreignObject className={styles.truncated}
                     x={x-width/2} y={y-10}
                     width={width} height={20}
      >
        <span title={payload.value}>{payload.value}</span>
      </foreignObject>

    )
  }
}

export default ChartView;