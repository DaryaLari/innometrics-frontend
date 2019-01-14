import React from 'react'
import _ from 'lodash'
import Chart from 'react-google-charts'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { getLinesAdded, getMetrics } from '../../helpers/metricsSelectors'
import { getActivitiesRequest } from '../../store/activities/actionCreators'
import Spinner from '../Spinner'
import PageTemplate from '../PageTemplate'
import PeriodPicker from '../PeriodPicker'
import GoalSection from './GoalSection'
import ComparizonChart from './ComparizonChart'
import styles from './style.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

const activities = [
  {
    name: 'Total hours',
    value: 38,
    trend: -2.7
  },
  {
    name: 'Coding',
    value: 15,
    trend: +10
  },
  {
    name: 'Web search',
    value: 12,
    trend: -18.2
  },
  {
    name: 'Communication',
    value: 7,
    trend: +5.7
  },
  {
    name: 'Others',
    value: 4,
    trend: -5.3
  }
]

const totalHours = [
  {
    day: 'Mon',
    actual: 14,
    average: 8,
    teamAvg: 3
  },
  {
    day: 'Tue',
    actual: 11,
    average: 13,
    teamAvg: 11
  },
  {
    day: 'Wed',
    actual: 8.5,
    average: 8.5,
    teamAvg: 2
  },
  {
    day: 'Thu',
    actual: 4,
    average: 7,
    teamAvg: 7
  },
  {
    day: 'Fri',
    actual: 7.5,
    average: 4,
    teamAvg: 12
  }
]

const codeMetrics = [
  {
    name: 'Lines of code',
    value: 732,
    trend: +12
  },
  {
    name: 'Pull requests',
    value: 6,
    trend: +20
  },
  {
    name: 'Comments on pull requsts',
    value: 3,
    trend: -22
  }
]

const locTrend = [
  {
    day: 'Mon',
    value: 63
  },
  {
    day: 'Tue',
    value: 94
  },
  {
    day: 'Wed',
    value: 82
  },
  {
    day: 'Thu',
    value: 118
  },
  {
    day: 'Fri',
    value: 97
  }
]


class _StatisticsPage extends React.Component {
  componentDidMount(){
    this.props.match.params.projectName ?
      this.props.getActivities(this.props.match.params.projectName)
      : this.props.getActivities()
  }
  render() {
    // console.log(this.props.metricsGroups)

    const testeeName = this.props.match.params.projectName ?
                        `'${this.props.match.params.projectName}' team`
                        : 'My'
    return (
      <PageTemplate title={testeeName + ' performance'}
                    restHeader={<PeriodPicker onSubmit={this.onPeriodChange}/>}
      >

        {
          this.props.activeRequest ? <Spinner/> :

          this.props.metricsGroups.map(group => (
            <GoalSection key={group.name}
                         goalName={group.name}
                         metrics={group.metrics}
            >
            </GoalSection>
          ))
        }

      </PageTemplate>
    )
  }
}

const StatisticsPage = connect(
  (state) => ({
    metricsGroups: getMetrics(state),
    activeRequest: state.activities.activeRequest
  }),

  (dispatch) => ({
    getActivities: (proj) => dispatch(getActivitiesRequest(proj))
  })
)(_StatisticsPage)


export default withRouter(StatisticsPage)