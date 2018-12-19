import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getActivities } from '../../../helpers/selectors'
import styles from './style.css'

class TableView extends React.Component {
  state = {
    sortKey: null,
    order: null // ['asc' | 'desc']
  }
  sortBy = (key) => {
    if(this.state.order === null || this.state.order === 'desc'){
      this.setState({sortKey: key, order: 'asc'})
    }
    else{
      this.setState({sortKey: key, order: 'desc'})
    }
  }
  getSortedActivities = () => {
    const key = this.state.key
    const order = this.state.order
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
      return ''
    }
    if(this.state.order === 'asc'){
      return <i className={`${'material-icons'} ${styles.sortDirection}`}>arrow_drop_up</i>
    }
    return <i className={`${'material-icons'} ${styles.sortDirection}`}>arrow_drop_down</i>
  }
  render(){
    let activities = this.getSortedActivities()
    return (
      <div className={styles.tableView}>
        <div className={styles.table}>
          <div className={styles.headerRow}>
            <div className={styles.cell}
                onClick={() => this.sortBy('start_time')}
            >
              Start time
              {this.orderSign('start_time')}
            </div>
            <div className={styles.cell}
                onClick={() => this.sortBy('end_time')}
            >
              End time
              {this.orderSign('end_time')}
            </div>
            <div className={styles.cell}
                onClick={() => this.sortBy('executable_name')}
            >
              File name
              {this.orderSign('executable_name')}
            </div>
          </div>
          {activities.map(a => (
            <div key={a._id}
                className={styles.row}
            >
              <div className={styles.cell}>{a.start_time}</div>
              <div className={styles.cell}>{a.end_time}</div>
              <div className={styles.cell} title={a.executable_name}>{a.executable_name}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const ConnectedTableView = connect(
  (state) => ({
    activities: getActivities(state)
  })
)(TableView)

export default ConnectedTableView