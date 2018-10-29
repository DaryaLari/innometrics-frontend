import React from "react";
import {connect} from "react-redux";
import TableView from './TableView'
import {getActivitiesRequest} from "../../store/activities/actionCreators";
import styles from "./style.css";

class DBPage extends React.Component {
  componentDidMount(){
    this.props.getActivities()
  }
  render() {
    return (
        <div className={styles.content}>
          <h1>Dashboard: Activities</h1>
          {this.props.activeRequest ? "Loading ... " :
            (this.props.activities.length === 0 ?
                "There is nothing to show yet" :
                <TableView activities={this.props.activities}/>
            )}
        </div>

    )
  }
}

const DashboardPage = connect(
  (state) => ({
    activities: state.activities.activities,
    activeRequest: state.activities.activeRequest
  }),

  (dispatch) => ({
    getActivities: () => dispatch(getActivitiesRequest())
  })
)(DBPage)

export default DashboardPage;