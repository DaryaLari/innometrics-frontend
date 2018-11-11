import React from "react";
import {connect} from "react-redux";
import {getProjectsRequest} from "../../store/projects/actionCreators";
import styles from "./style.css";

class _ProjectsListPage extends React.Component {
  componentDidMount(){
    this.props.getProjects()
  }
  render() {
    return (
      <div className={styles.content}>
        <h1>Projects</h1>
        {this.props.activeRequest ? "Loading ... " :
          (this.props.projects.length === 0 ?
              "There is nothing to show yet" :
              <div className={styles.projectsList}>
                {this.props.projects.map(p => (
                  <div className={styles.project}
                       key={p.name}
                       onClick={() => this.props.history.push(`/projects/${p.name}`)}
                  >
                    {p.name}
                  </div>
                ))}
              </div>
          )}
      </div>

    )
  }
}

const ProjectsListPage = connect(
  (state) => ({
    projects: state.projects.projects,
    activeRequest: state.projects.activeRequest
  }),

  (dispatch) => ({
    getProjects: () => dispatch(getProjectsRequest())
  })
)(_ProjectsListPage)

export default ProjectsListPage;