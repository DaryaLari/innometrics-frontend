import React from 'react'
import { withRouter } from 'react-router'
import PageTemplate from '../PageTemplate'
import styles from './style.css'

class ProjectPage extends React.Component {
  render() {
    const projectName = this.props.match.params.projectName
    return (
      <PageTemplate title={projectName}
                    leftSideNavBar={<aside style={{display: 'inline-block'}}>menu</aside>}
      >
        <div className={styles.statistics}>
          Statistics in diagrams would be here
        </div>
      </PageTemplate>

    )
  }
}

export default withRouter(ProjectPage)