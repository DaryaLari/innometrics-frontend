import React from "react";
import styles from "./style.css";
import Button from '../Button'

class LandingPage extends React.Component {
  render() {
    // const bodyWidth = document.getElementsByTagName('body')[0].offsetWidth
    // const bodyHeight = document.getElementsByTagName('body')[0].offsetHeight
    // console.log(bodyWidth, bodyHeight)
    return (
        <div className={styles.content}>
          <div className={styles.mainImg}>
            <div className={styles.descriptionBox}>
              <h1 className={styles.secondaryPhrase}>Analyze your activity</h1>
              <h1 className={styles.articlePhrase}>and </h1>
              <h1 className={styles.primaryPhrase}>Improve Productivity</h1>
              <Button name="Get Started"/>
            </div>
          </div>
          <div className={styles.screenBlock}>
            <h2 className={styles.heading}>Download links</h2>
            <p className={styles.blockDescription}>
              Coming soon...
            </p>
          </div>

        </div>

    )
  }
}

export default LandingPage;