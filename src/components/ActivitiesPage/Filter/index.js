import moment from 'moment'
import React from 'react'
import { connect } from 'react-redux'
import { Field, isInvalid, reduxForm } from 'redux-form'
import { date, required } from '../../../helpers/formValidators'
import Button from '../../Button'
import Input from '../../Input'
import styles from './style.css'

class SearchFilter extends React.Component {
  state = {
    opened: true
  }
  onSubmit = () => {
    this.props.onSubmit()
  }

  onOpenClose = () => {
    this.setState({opened: !this.state.opened})
  }
  render(){
    const datePickerProps = {
      type: 'datePicker',
      labelStyle: {
        display: 'inline',
        padding: '0 5px 0 0'
      },
      placeholder: '',
      width: 'calc(var(--cell-size)*4)',
      height: '45px'
    }
    return (
      <React.Fragment>
        {/*<Button name='Filter' icon='filter_list' styleType='action' onClick={this.onOpenClose} />*/}
        {this.state.opened && (
          <form className={styles.panel}
                onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <div className={styles.periodPicker}>

              <Field
                name='startDate'
                component={Input}
                validate={[required, date]}
                normalize={(value, prevValue, allValues, prevAllValues) => {
                  if(moment(value, 'DD/MM/YYYY')
                    .isAfter(moment(allValues.endDate, 'DD/MM/YYYY'))
                  ){
                    this.props.change('endDate', moment(value).format('DD/MM/YYYY'))
                    return allValues.endDate
                  }
                  return moment(value).format('DD/MM/YYYY')
                }}
                props={{
                  label: 'From',
                  ...datePickerProps
                }}
              />

              <Field
                name='endDate'
                component={Input}
                validate={[required, date]}
                normalize={(value, prevValue, allValues, prevAllValues) => {
                  if(moment(value, 'DD/MM/YYYY')
                    .isBefore(moment(allValues.startDate, 'DD/MM/YYYY'))
                  ){
                    this.props.change('startDate', moment(value).format('DD/MM/YYYY'))
                    return allValues.startDate
                  }
                  return moment(value).format('DD/MM/YYYY')
                }}
                props={{
                  label: 'Till',
                  ...datePickerProps
                }}
              />

            </div>

            <Button name='Apply'
                    type='submit'
                    disabled={this.props.submitDisabled}
            />
          </form>)}
      </React.Fragment>
    )
  }
}


const initialValues = {
  startDate: moment().subtract({weeks: 1}).format('DD/MM/YYYY'),
  endDate: moment().format('DD/MM/YYYY')
}

let Filter = reduxForm({
  form: 'activitiesFilter',
  initialValues
})(SearchFilter)

Filter = connect(
  (state) => ({
    filterFormState: state.form.activitiesFilter,
    submitDisabled: isInvalid('activitiesFilter')(state) || state.activities.activeRequest
  })
)(Filter)

export default Filter