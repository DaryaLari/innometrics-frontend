import React from 'react'
import {connect} from 'react-redux'
import PageTemplate from '../PageTemplate'
import Spinner from '../Spinner'
import TableView from './TableView'
import ChartView from './ChartView'
import { getActivities } from '../../helpers/selectors'
import {getActivitiesRequest} from '../../store/activities/actionCreators'
import styles from './style.css'

class _ActivitiesPage extends React.Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
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
  handlePeriodChange = (source, date) => {
    let newState = this.state
    newState[source] = date
    if(newState.startDate.getTime() > newState.endDate.getTime()){
      newState.startDate = [newState.endDate, newState.endDate = newState.startDate][0] // swap
    }
    this.setState(newState)
  }
  render() {
    return (
      <PageTemplate title='Activities'
                    // restHeader={<PeriodPicker handlePeriodChange={this.handleChange}
                    //                           startDate={this.state.startDate}
                    //                           endDate={this.state.endDate}
                    //             />}
      >
          {this.props.activeRequest ? <Spinner/> :
            (this.props.activities.length === 0 ?
                'There is nothing to show yet' :
                <div className={styles.commonView}>
                  <ChartView onBarClick={this.onSelectActivity} />
                  <TableView selectedActivity={this.state.selectedActivity} />
                </div>
                )}
      </PageTemplate>

    )
  }
}

const ActivitiesPage = connect(
  (state) => ({
    activities: getActivities(state),
    activeRequest: state.activities.activeRequest
  }),

  (dispatch) => ({
    getActivities: () => dispatch(getActivitiesRequest())
  })
)(_ActivitiesPage)

export default ActivitiesPage