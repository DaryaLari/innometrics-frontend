import React from "react";
import {Link} from "react-router-dom";
import styles from "./style.css";

class LandingPage extends React.Component {
  render() {
    return (
        <div className={styles.content}>
          Landing page
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>

    )
  }
}

export default LandingPage;