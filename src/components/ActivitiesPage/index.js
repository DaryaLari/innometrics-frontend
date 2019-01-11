import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
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
    console.log(this.props.match.params.projectName)
    this.getActivities()
  }

  getActivities = () => {
    this.props.match.params.projectName ?
      this.props.getActivities(this.props.match.params.projectName)
      : this.props.getActivities()
  }

  render() {
    const testeeName = this.props.match.params.projectName ?
                       `'${this.props.match.params.projectName}' team`
                                                           : 'My'
    return (
      <PageTemplate title={testeeName + ' activities'}
                    restHeader={<PeriodPicker onSubmit={this.getActivities}/>}
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
    getActivities: (proj) => dispatch(getActivitiesRequest(proj))
  })
)(_ActivitiesPage)

export default withRouter(ActivitiesPage)