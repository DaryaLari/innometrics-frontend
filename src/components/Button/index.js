import React from "react";
import PropTypes from 'prop-types';
import styles from "./style.css";

class Button extends React.Component {
  render() {
    const {name, styleType, style, disabled, ...restProps} = this.props
    return (
        <button className={styles[styleType]}
                style={style}
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
  styleType: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  style: PropTypes.object
}

Button.defaultProps = {
  styleType: "primary",
  disabled: false,
  style: {}
}

export default Button;