import React from "react";
import {connect} from "react-redux";
import TableView from './TableView'
import ChartView from './ChartView'
import { getActivities } from '../../helpers/selectors'
import {getActivitiesRequest} from "../../store/activities/actionCreators";
import styles from "./style.css";

class DBPage extends React.Component {
  state = {
    selectedActivity: null
  }
  componentDidMount(){
    this.props.getActivities()
  }
  onSelectActivity = (data) => {
    this.state.selectedActivity === data.executable_name ?
      this.setState({selectedActivity: null}):
      this.setState({selectedActivity: data.executable_name})
  }
  render() {
    return (
        <div className={styles.content}>
          <h1>Dashboard: Activities</h1>
          {this.props.activeRequest ? "Loading ... " :
            (this.props.activities.length === 0 ?
                "There is nothing to show yet" :
                <div className={styles.commonView}>
                  <ChartView onBarClick={this.onSelectActivity} />
                  <TableView selectedActivity={this.state.selectedActivity} />
                </div>
                )}
        </div>

    )
  }
}

const DashboardPage = connect(
  (state) => ({
    activities: getActivities(state),
    activeRequest: state.activities.activeRequest
  }),

  (dispatch) => ({
    getActivities: () => dispatch(getActivitiesRequest())
  })
)(DBPage)

export default DashboardPage;