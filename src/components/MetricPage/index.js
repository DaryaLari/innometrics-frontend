import moment from 'moment'
import React from 'react'
import Chart from 'react-google-charts'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import { getMetrics } from '../../helpers/metricsSelectors'
import PageTemplate from '../PageTemplate'
import PeriodPicker from '../PeriodPicker'
import Spinner from '../Spinner'
import {
  getFilteredActivities,
  getSelectedPeriod
} from '../../helpers/selectors'
import {getActivitiesRequest} from '../../store/activities/actionCreators'
import styles from './style.css'


const TabTemplate = ({name, active, onClick}) => {
  return (
    <div className={active ? styles.tabActive : styles.tab}
         key={name}
    	 onClick={onClick}
    >
      <span className={styles.tabName}>{name}</span>
    </div>
  )
}

class _MetricPage extends React.Component {
  state = {
	opened: 'chart'
  }
  componentDidMount(){
    this.getActivities()
  }

  getActivities = () => {
    this.props.getActivities()
  }

  render() {
    let metric = this.props.match.params.metric ?
                       this.props.match.params.metric : ''
    const metricData = _.get(this.props.metricsGroups, metric.split(' '), undefined)
    return (
      <PageTemplate title={metricData ? metricData.name : metric}
                    restHeader={<PeriodPicker onSubmit={this.getActivities}/>}
      >
          {this.props.activeRequest ? <Spinner/> :
            (!metricData ?
              'There is nothing to show yet' :
              <div className={styles.commonView}>

                <div className={styles.tabs}>
                  <TabTemplate name='Chart' active={this.state.opened==='chart'} onClick={() => this.setState({opened: 'chart'})}/>
                  <TabTemplate name='Table' active={this.state.opened==='table'} onClick={() => this.setState({opened: 'table'})}/>
                </div>

                <div className={styles.panel}>
                   <div className={styles.chart}>
                          {this.state.opened === 'chart' && <Chart
                            // width={'500px'}
                            // height={'300px'}
                            chartType='BarChart'
                            loader={<Spinner/>}
                            data={[metricData.headerRow].concat(metricData.data)}
                            options={{
                              title: metricData.name,
                              // chartArea: { width: '50%' },
                              hAxis: {
                                title: 'Amount',
                                minValue: 0,
                              },
                              vAxis: {
                                title: 'File',
                                // textPosition: 'none'
                              },
                              // legend: { position: 'none' },
                            }}
                          />}
                          {this.state.opened === 'table' && <Chart
                            width={ '100%'}
                            // height={'300px'}
                            chartType="Table"
                            loader={<Spinner/>}
                            data={[metricData.headerRow].concat(metricData.data)}
                            options={{
                            }}
                            rootProps={{ 'data-testid': '1' }}
                          />}
                   </div>
                </div>

              </div>
            )}
      </PageTemplate>

    )
  }
}

const MetricPage = connect(
  (state) => ({
    // activities: getActivities(state),
    metricsGroups: getMetrics(state),

    periodChosen: getSelectedPeriod(state),
    // activities: getFilteredActivities(state),
    activeRequest: state.activities.activeRequest
  }),

  (dispatch) => ({
    getActivities: (proj) => dispatch(getActivitiesRequest(proj))
  })
)(_MetricPage)

export default withRouter(MetricPage)