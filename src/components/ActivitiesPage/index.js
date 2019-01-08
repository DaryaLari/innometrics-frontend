import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import PageTemplate from '../PageTemplate'
import PeriodPicker from '../PeriodPicker'
import Spinner from '../Spinner'
import ActivitiesFilter from './ActivitiesFilter'
import TimelineChart from './TimelineChart'
import TableView from './TableView'
import ChartView from './ChartView'
import { getActivities, getFilteredActivities, getSelectedActivitiesFilters } from '../../helpers/selectors'
import {getActivitiesRequest} from '../../store/activities/actionCreators'
import styles from './style.css'

class _ActivitiesPage extends React.Component {
  componentDidMount(){
    this.props.getActivities()
  }

  render() {
    // console.log(this.props.activities[0])
    return (
      <PageTemplate title='Activities'
                    restHeader={<PeriodPicker onSubmit={this.props.getActivities}/>}
      >
          {this.props.activeRequest ? <Spinner/> :
            (this.props.activities.length === 0 ?
                'There is nothing to show yet' :
                <div className={styles.commonView}>

                  <ActivitiesFilter/>

                  <TimelineChart activities={this.props.activities}/>
                  <ChartView />
                  <TableView />
                </div>
                )}
      </PageTemplate>

    )
  }
}

const ActivitiesPage = connect(
  (state) => ({
    // activities: getActivities(state),
    activities: getFilteredActivities(state),
    activeRequest: state.activities.activeRequest
  }),

  (dispatch) => ({
    getActivities: () => dispatch(getActivitiesRequest())
  })
)(_ActivitiesPage)

export default ActivitiesPage