import React from "react";
import PropTypes from 'prop-types';
import styles from "./style.css";

class Button extends React.Component {
  render() {
    const {name, style, disabled, ...restProps} = this.props
    return (
        <button className={styles[style]}
                disabled={disabled}
                {...restProps}
        >
          {name}
        </button>

    )
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool
}

Button.defaultProps = {
  style: "primary",
  disabled: false
}

export default Button;