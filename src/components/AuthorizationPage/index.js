import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
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

AuthorizationPage.propTypes = {
  children: PropTypes.element.isRequired
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
              <Link to="/register">Register</Link>
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
              <Link to="/login">Login</Link>
            </p>
          </div>
        </AuthorizationPage>
    )
  }
}

export {LoginPage, RegisterPage};