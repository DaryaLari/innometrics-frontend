import React from "react";
import styles from "./style.css";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

class ChartView extends React.Component {
  state = {
    activities: this.props.activities.map(a => {
      return {
        actName: a.executable_name,
        duration: Date.parse(a.start_time) - Date.parse(a.end_time)
      }})
  }
  render() {
    return (
      <div className={styles.chartView}>
        <ResponsiveContainer width={'100%'} aspect={2}>
          <BarChart data={this.state.activities}
                         margin={{ top: 25, right: 50, left: 50, bottom: 25 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="actName" label={{ offset: 0, value: "Activity", position: 'bottom' }} height={10}  axisLine={false} tickLine={false} tick={false} />
          <YAxis label={{ offset: 13, value: "Duration (sec)", position: 'top' }} dataKey="duration" />
          <Tooltip payload={this.state.activities} />
          <Bar dataKey="duration" barSize={30} fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default ChartView;