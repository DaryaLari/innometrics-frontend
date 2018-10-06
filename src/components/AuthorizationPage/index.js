import React from "react";
import {Link, HashRouter as Router} from "react-router-dom";
import styles from "./style.css";

class AuthorizationPage extends React.Component {
  render() {
    return (
        <div className={styles.content}>
          {this.props.children}
        </div>

    )
  }
}

class LoginPage extends React.Component {
  render() {
    return (
        <AuthorizationPage>
          <div className={styles.form}>
            <h1>Login</h1>
            <div className={styles.inputRow}>
              <input placeholder="email"/>
            </div>
            <div className={styles.inputRow}>
              <input placeholder="password"/>
            </div>
            <p>Don't have account yet?
              <Router>
                <Link to="/register">Register</Link>
              </Router>
            </p>
          </div>
        </AuthorizationPage>
    )
  }
}

class RegisterPage extends React.Component {
  render() {
    return (
        <AuthorizationPage>
          <div className={styles.form}>
            <h1>Register</h1>
            <div className={styles.inputRow}>
              <input placeholder="email"/>
            </div>
            <div className={styles.inputRow}>
              <input placeholder="password"/>
            </div>
            <p>Have account already?
              <Router>
                <Link to="/login">Login</Link>
              </Router>
            </p>
          </div>
        </AuthorizationPage>
    )
  }
}

export {LoginPage, RegisterPage};