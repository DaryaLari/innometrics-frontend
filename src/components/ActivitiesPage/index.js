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
      <PageTemplate title='Activities'>
          {/*<Spinner/>*/}
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