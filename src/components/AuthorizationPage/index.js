import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {loginRequest, registerRequest} from "../../store/user/actionCreators";
import styles from "./style.css";

class LoginPage extends React.Component {
  onSubmit = () => {
    this.props.login()
  }
  render() {
    return (
        <div className={styles.form}>
          <h1>Login</h1>
          <div className={styles.inputRow}>
            <Field
                name="email"
                component="input"
                placeholder="email"
                type="email"
            />
          </div>
          <div className={styles.inputRow}>
            <Field
                name="password"
                component="input"
                placeholder="password"
                type="password"
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
    )
  }
}

class RegisterPage extends React.Component {
  onSubmit = () => {
    this.props.register()
  }
  render() {
    console.log(this.props.authFormValues, this.props.userCredentials)
    return (
        <div className={styles.form}>
          <h1>Register</h1>
          <div className={styles.inputRow}>
            <Field
                name="email"
                component="input"
                placeholder="email"
                type="email"
            />
          </div>
          <div className={styles.inputRow}>
            <Field
                name="name"
                component="input"
                placeholder="name"
                type="text"
            />
          </div>
          <div className={styles.inputRow}>
            <Field
                name="surname"
                component="input"
                placeholder="surname"
                type="text"
            />
          </div>
          <div className={styles.inputRow}>
            <Field
                name="password"
                component="input"
                placeholder="password"
                type="password"
            />
          </div>
          <p className={styles.errorMsg}>{}</p>
          <button className={styles.submitBtn}
                  onClick={this.onSubmit}
          >
            Register
          </button>
          <p>Have account already?
            <Link to="/login">Login</Link>
          </p>
        </div>
    )
  }
}


class AuthorizationPage extends React.Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return this.props.match != nextProps.match;
  }
  render(){
    return (
        <div className={styles.content}>
          {(this.props.match.path === "/login") ?
             <LoginPage {...this.props}/> : <RegisterPage {...this.props}/>
          }
        </div>
    )
  }
}

const initialValues = {
  email: "",
  password: "",
  name: "",
  surname: ""
}

AuthorizationPage = reduxForm({
  form: 'authorization',
  initialValues: initialValues
})(AuthorizationPage)

AuthorizationPage = connect(
    (state) => ({
      authFormState: state.form.authorization,
      userCredentials: selector(state, 'email', 'password', 'name', 'surname'),
    }),

    (dispatch) => ({
      login: () => dispatch(loginRequest()),
      register: () => dispatch(registerRequest())
    })
)(AuthorizationPage)

export default AuthorizationPage;