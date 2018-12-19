import React from 'react'
import {connect} from 'react-redux'
import PageTemplate from '../PageTemplate'
import PeriodPicker from '../PeriodPicker'
import Spinner from '../Spinner'
import Filter from './Filter'
import TableView from './TableView'
import ChartView from './ChartView'
import { getActivities } from '../../helpers/selectors'
import {getActivitiesRequest} from '../../store/activities/actionCreators'
import styles from './style.css'

class _ActivitiesPage extends React.Component {
  componentDidMount(){
    this.props.getActivities()
  }
  render() {
    return (
      <PageTemplate title={'Activities'/*{(
                          <React.Fragment>
                            Activities
                            <span className={styles.period}>
                              ({this.props.activitiesFilters.startDate} - {this.props.activitiesFilters.endDate})
                            </span>
                          </React.Fragment>)
        }*/}
                    restHeader={<Filter onSubmit={this.props.getActivities}/>}
      >
          {this.props.activeRequest ? <Spinner/> :
            (this.props.activities.length === 0 ?
                'There is nothing to show yet' :
                <div className={styles.commonView}>
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
    activities: getActivities(state),
    activitiesFilters: state.activities.filters,
    activeRequest: state.activities.activeRequest
  }),

  (dispatch) => ({
    getActivities: () => dispatch(getActivitiesRequest())
  })
)(_ActivitiesPage)

export default ActivitiesPage