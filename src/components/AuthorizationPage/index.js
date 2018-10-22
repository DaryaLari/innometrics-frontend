import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Field, isInvalid, reduxForm} from "redux-form";
import {loginRequest, registerRequest} from "../../store/user/actionCreators";
import styles from "./style.css";

class LoginPage extends React.Component {
  onSubmit = () => {
    this.props.login()
  }
  render() {
    return (
        <form className={styles.form}
              onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
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
                  type="submit"
                  disabled={this.props.isInvalidForm}
          >
            Login
          </button>
          <p>Don't have account yet?
            <Link to="/register">Register</Link>
          </p>
        </form>
    )
  }
}

class RegisterPage extends React.Component {
  onSubmit = () => {
    this.props.register()
  }
  render() {
    console.log(this.props)
    return (
        <form className={styles.form}
              onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
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
                  type="submit"
                  disabled={this.props.isInvalidForm}
          >
            Register
          </button>
          <p>Have account already?
            <Link to="/login">Login</Link>
          </p>
        </form>
    )
  }
}


class AuthorizationPage extends React.Component {
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

const validate = values => {
  const errors = {}
  if(!values.email.trim()){
    errors.email = "required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if(!values.password.trim()){
    errors.password = "required"
  }
  if(!values.name.trim()){
    errors.name = "required"
  }
  if(!values.surname.trim()){
    errors.surname = "required"
  }
  return errors
}

AuthorizationPage = reduxForm({
  form: 'authorization',
  initialValues: initialValues,
  validate: validate
})(AuthorizationPage)

AuthorizationPage = connect(
    (state) => ({
      authFormState: state.form.authorization,
      isInvalidForm: isInvalid('authorization')(state)
    }),

    (dispatch) => ({
      login: () => dispatch(loginRequest()),
      register: () => dispatch(registerRequest())
    })
)(AuthorizationPage)

export default AuthorizationPage;