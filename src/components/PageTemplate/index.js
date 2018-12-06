import React from 'react'
import styles from './style.css'
import Button from '../Button'

class PageTemplate extends React.Component {
  render() {
    // const bodyWidth = document.getElementsByTagName('body')[0].offsetWidth
    // const bodyHeight = document.getElementsByTagName('body')[0].offsetHeight
    // console.log(bodyWidth, bodyHeight)
    return (
        <main className={styles.content}>

          <div className={styles.titleRow}>
            <h1 className={styles.pageTitle}>{this.props.title}</h1>{this.props.restHeader}
          </div>
          {this.props.children}

        </main>

    )
  }
}

export default PageTemplate