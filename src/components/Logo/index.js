import React from 'react'
import styles from './style.css'

class Logo extends React.Component {
  render() {
    return (
        <div className={styles.logo}>
          <span className={styles.name}>
            <span className={styles.inno}>Inno</span>
            <span className={styles.metrics}>Metrics</span>
          </span>
        </div>

    )
  }
}

export default Logo