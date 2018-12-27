import React from 'react'
import DatePicker from 'react-datepicker'
import styles from './style.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

class PeriodPicker extends React.Component {
  render() {
    return (
      <div className={styles.datePicker}>
        <i className={`${'material-icons'} ${styles.calendarIcon}`}>
          calendar_today
        </i>

        <DatePicker className={styles.date}
                    selected={this.props.startDate}
                    onChange={(date) => this.props.handleChange('startDate', date)}
                    dateFormat='dd/MM/yyyy'
                    popperPlacement='bottom-start'
                    popperModifiers={{
                      preventOverflow: {
                        enabled: true,
                        escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
                        boundariesElement: 'viewport'
                      }
                    }}
        />
        -
        <DatePicker className={styles.date}
                    selected={this.props.endDate}
                    onChange={(date) => this.props.handleChange('endDate', date)}
                    dateFormat='dd/MM/yyyy'
                    popperPlacement='bottom-start'
                    popperModifiers={{
                      preventOverflow: {
                        enabled: true,
                        escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
                        boundariesElement: 'viewport'
                      }
                    }}
        />
      </div>
    )
  }
}

export default PeriodPicker