import React from "react";
import {Link} from "react-router-dom";
import styles from "./style.css";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  }
  onInputChanged = (event) => {
    let newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }
  onSubmit = () => {
    console.log(this.state.email, this.state.password)
  }
  render() {
    return (
        <div className={styles.content}>
          <div className={styles.form}>
            <h1>Login</h1>
            <div className={styles.inputRow}>
              <input
                  name="email"
                  placeholder="email"
                  type="email"
                  value={this.state.email}
                  disabled={false}
                  onChange={this.onInputChanged}
              />
            </div>
            <div className={styles.inputRow}>
              <input
                  name="password"
                  placeholder="password"
                  type="password"
                  value={this.state.password}
                  disabled={false}
                  onChange={this.onInputChanged}
              />
            </div>
            <button className={styles.submitBtn}
                    onClick={this.onSubmit}
            >
              Login
            </button>
            <p>Don't have account yet?
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
    )
  }
}

class RegisterPage extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
    surname: ""
  }
  onInputChanged = (event) => {
    let newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }
  onSubmit = () => {
    console.log(this.state.email, this.state.name, this.state.surname, this.state.password)
  }
  render() {
    return (
        <div className={styles.content}>
          <div className={styles.form}>
            <h1>Register</h1>
            <div className={styles.inputRow}>
              <input
                  name="email"
                  placeholder="email"
                  type="email"
                  value={this.state.email}
                  disabled={false}
                  onChange={this.onInputChanged}
              />
            </div>
            <div className={styles.inputRow}>
              <input
                  name="name"
                  placeholder="name"
                  type="text"
                  value={this.state.name}
                  disabled={false}
                  onChange={this.onInputChanged}
              />
            </div>
            <div className={styles.inputRow}>
              <input
                  name="surname"
                  placeholder="surname"
                  type="text"
                  value={this.state.surname}
                  disabled={false}
                  onChange={this.onInputChanged}
              />
            </div>
            <div className={styles.inputRow}>
              <input
                  name="password"
                  placeholder="password"
                  type="password"
                  value={this.state.password}
                  disabled={false}
                  onChange={this.onInputChanged}
              />
            </div>
            <button className={styles.submitBtn}
                    onClick={this.onSubmit}
            >
              Register
            </button>
            <p>Have account already?
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
    )
  }
}

export {LoginPage, RegisterPage};