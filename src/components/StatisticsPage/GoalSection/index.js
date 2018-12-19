import React from 'react'
import styles from './style.css'

class Index extends React.Component {
  render() {
    return (
      <div className={styles.goal}>
        <span>Goal: <h2 className={styles.goalName}>{this.props.goalName}</h2></span>
        {this.props.children === undefined ?
           (<div className={styles.emptyPanel}>
            There is nothing to show for this goal yet
          </div>) :
           (<div className={styles.panel}>
               {this.props.children}
           </div>)
        }
      </div>
    )
  }
}

export default Index