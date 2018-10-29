import React from "react";
import {connect} from "react-redux";
import {getActivitiesRequest} from "../../store/activities/actionCreators";
import styles from "./style.css";

class DBPage extends React.Component {
  componentDidMount(){
    this.props.getActivities()
  }
  render() {
    return (
        <div className={styles.content}>
          <h1>Dashboard</h1>
        </div>

    )
  }
}

const DashboardPage = connect(
  (state) => ({
    activities: state.activities
  }),

  (dispatch) => ({
    getActivities: () => dispatch(getActivitiesRequest())
  })
)(DBPage)
