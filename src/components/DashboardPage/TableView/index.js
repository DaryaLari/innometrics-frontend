import React from "react";
import { connect } from 'react-redux'
import _ from 'lodash'
import { getActivities } from '../../../helpers/selectors'
import styles from "./style.css";

class TableView extends React.Component {
  state = {
    sortKey: null,
    order: null
  }
  sortBy = (key) => {
    if(this.state.order === null || this.state.order === 'desc'){
      this.setState({sortKey: key, order: 'asc'})
    }
    else{
      this.setState({sortKey: key, order: 'desc'})
    }
  }
  /*
  * @param { string } key - key of activities, by which the array should be sorted
  * @param { ['asc' | 'desc'] } order - for [ ascending or descending ] sorting order
  * */
  sortActivities = (key=this.state.key, order=this.state.order) => {
    if(key === null) {
      return this.props.activities
    }
    let activities = this.props.activities
    let modifiedKey = this.state.sortKey

    // if sortBy time, then convert value to data
    if(key === 'start_time' || key === 'end_time'){
      modifiedKey = (a) => Date.parse(a[key])
    }

    activities = _.sortBy(activities, modifiedKey)
    if(order === 'desc'){
      _.reverse(activities)
    }
    return activities
  }
  orderSign = (key) => {
    if(this.state.sortKey !== key){
      return ""
    }
    if(this.state.order === 'asc'){
      return <i className={`${"material-icons"} ${styles.sortDirection}`}>arrow_drop_up</i>
    }
    return <i className={`${"material-icons"} ${styles.sortDirection}`}>arrow_drop_down</i>
  }
  render(){
    let activities = this.sortActivities()
    return (
      <div className={styles.tableView}>
        <table className={styles.table}>
          <thead>
          <tr className={styles.row}>
            <th className={styles.cell}
                onClick={() => this.sortBy('start_time')}
            >
              Start time
              {this.orderSign('start_time')}
            </th>
            <th className={styles.cell}
                onClick={() => this.sortBy('end_time')}
            >
              End time
              {this.orderSign('end_time')}
            </th>
            <th className={styles.cell}
                onClick={() => this.sortBy('executable_name')}
            >
              File name
              {this.orderSign('executable_name')}
            </th>
          </tr>
          </thead>
          <tbody>
          {activities.map(a => (
            <tr key={a._id}
                className={`${styles.row} ${this.props.selectedActivity === a.executable_name && styles.selectedActivity}`}
            >
              <td className={styles.cell}>{a.start_time}</td>
              <td className={styles.cell}>{a.end_time}</td>
              <td className={styles.cell} title={a.executable_name}>{a.executable_name}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const ConnectedTableView = connect(
  (state) => ({
    activities: getActivities(state)
  })
)(TableView)

export default ConnectedTableView;