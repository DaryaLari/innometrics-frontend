import React from "react";
import styles from "./style.css";

class LandingPage extends React.Component {
  render() {
    return (
      <main className="hi">
        <div className={styles.mainImg}>
          <div className={styles.descriptionBox}>
            <h1 className="hi">Analyze your activity</h1>
            <h1 className={styles.articlePhrase}>and </h1>
            <h1 className={styles.primaryPhrase}>Improve Productivity</h1>
            {/*<Button name='Get Started'/>*/}
          </div>
        </div>
        <div className={styles.screenBlock}>
          <h2 className={styles.heading}>Download links</h2>
          <p className={styles.blockDescription}>
            <a href="https://innometric.guru/files/InnometricsMac.zip" download>
              MacOS client
            </a>
            <br />
            <a
              href="https://innometric.guru/files/EclipseLogger_1.0.0.jar"
              download
            >
              Eclipse plugin
            </a>
            <br />
            Others coming soon...
          </p>
        </div>
      </main>
    );
  }
}

export default LandingPage;
