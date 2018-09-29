import React from "react";
import styles from "./style.css";

class Header extends React.Component {
  render() {
    return (
        <div>
          <h1 className={styles.colored}>Header</h1>

        </div>

    )
  }
}

export default Header;