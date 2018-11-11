import React from "react";
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import styles from "./style.css";

class ProjectPage extends React.Component {
  render() {
    console.log(this.props)
    const projectName = this.props.match.params.projectName
    return (
      <div className={styles.content}>
        <h1><Link to='/projects'>Projects</Link> / {projectName}</h1>
        <div className={styles.statistics}>
          Statistics in diagrams would be here
        </div>
      </div>

    )
  }
}

export default withRouter(ProjectPage);