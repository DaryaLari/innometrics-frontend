import React from "react";
import styles from "./style.css";

class AuthorizationPage extends React.Component {
  render() {
    return (
        <div className={styles.content}>
          <LoginForm/>
        </div>

    )
  }
}

class LoginForm extends React.Component {
  render() {
    return (
        <div className={styles.form}>
          <h1>Login</h1>
          <div className={styles.inputRow}>
            <input placeholder="email"/>
          </div>
          <div className={styles.inputRow}>
            <input placeholder="password"/>
          </div>
            <p>Don't have account yet?
            <a href="/register">Register</a>
          </p>
        </div>
    )
  }
}

class RegisterForm extends React.Component {
  render() {
    return (
        <div className={styles.form}>
          <h1>Register</h1>
          <div className={styles.inputRow}>
            <input placeholder="email"/>
          </div>
          <div className={styles.inputRow}>
            <input placeholder="password"/>
          </div>
          <p>Have account already?
            <a href="/login">Login</a>
          </p>
        </div>
    )
  }
}

export default AuthorizationPage;