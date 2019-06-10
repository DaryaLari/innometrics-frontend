import moment from 'moment'
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

class _ActivitiesPage extends React.Component {
  state = {
	opened: 'timeline'
  }
  componentDidMount(){
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
                  
                  <div className={styles.tabs}>
                  	<TabTemplate name='Timeline Chart' active={this.state.opened==='timeline'} onClick={() => this.setState({opened: 'timeline'})}/>
                  	<TabTemplate name='Bar Chart' active={this.state.opened==='bar'} onClick={() => this.setState({opened: 'bar'})}/>
                  	<TabTemplate name='Table' active={this.state.opened==='table'} onClick={() => this.setState({opened: 'table'})}/>
                  </div>

                  
                  	<div className={styles.panel}>
                    <div className={styles.chart}>
            
                          {this.state.opened === 'timeline' && <TimelineChart activities={this.props.activities}
                                         start={moment(this.props.periodChosen.startDate, 'DD/MM/YYYY').toDate()}
                                         end={moment(this.props.periodChosen.endDate, 'DD/MM/YYYY').toDate()}
                          />}
                          {this.state.opened === 'bar' && <ChartView />}
                          {this.state.opened === 'table' && <TableView />}
                    </div>
                  </div>
                  	
                  	
                  	
                  	
                  	
                  	
                </div>
                )}
      </PageTemplate>

    )
  }
}

const ActivitiesPage = connect(
  (state) => ({
    // activities: getActivities(state),

    periodChosen: getSelectedPeriod(state),
    activities: getFilteredActivities(state),
    activeRequest: state.activities.activeRequest
  }),

  (dispatch) => ({
    getActivities: (proj) => dispatch(getActivitiesRequest(proj))
  })
)(_ActivitiesPage)

export default withRouter(ActivitiesPage)