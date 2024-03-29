import moment from 'moment'
import React from 'react'
import Chart from 'react-google-charts'
import { connect } from 'react-redux'
import { getFilteredActivities } from '../../../helpers/selectors'
import Spinner from '../../Spinner'

class TableView extends React.Component {
  render(){
    return (
      <Chart
        width={ '100%'}
        // height={'300px'}
        chartType="Table"
        loader={<Spinner/>}
        data={[
          [
            // { type: 'string', label: 'Id' },
            { type: 'datetime', label: 'Start time' },
            { type: 'datetime', label: 'End time' },
            { type: 'string', label: 'Name' },
            { type: 'string', label: 'Browser Url' }
          ]]
          .concat(this.props.activities.map(a => {
            let brUrl = a.browser_url === undefined ? '-' : a.browser_url
            return [
            // a._id,
            moment(a.start_time, 'YYYY-MM-DD HH:mm:ss').toDate(),
            moment(a.end_time, 'YYYY-MM-DD HH:mm:ss').toDate(),
            a.executable_name,
            brUrl
          ]}))
        }
        options={{
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    )
  }
}

const ConnectedTableView = connect(
  (state) => ({
    activities: getFilteredActivities(state)
  })
)(TableView)

export default ConnectedTableView