import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import styles from './style.css'

class Input extends React.Component {
  render() {
    const {input, meta, type, label, placeholder, required, disabled, id, error, width, height, ...inputPassedProps} = this.props
    let containerProps = {
      style: _.pickBy({
        width,
        height
      })
    }
    let inputProps = {
      type,
      placeholder,
      disabled
    }
    _.assign(inputProps, inputPassedProps)
    let labelProps = {}
    if(id != undefined) {
      inputProps.id = id
      labelProps.htmlFor = id
    }
    _.assign(inputProps, input)
    const displayedError = meta != undefined ? meta.error : error
    return (
        <div className={styles.container} {...containerProps}>
          <label className={styles.label} {...labelProps}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
          <input className={styles.input} {...inputProps}/>
          <div className={styles.messages}>
            {_.get(meta, 'touched') && <span className={styles.error}>{displayedError}</span>}
          </div>
        </div>

    )
  }
}

Input.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.string,
  error: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

Input.defaultProps = {
  type: 'text',
  label: '',
  placeholder: 'Input your text here',
  required: false,
  disabled: false,
  error: ''
}

export default Input