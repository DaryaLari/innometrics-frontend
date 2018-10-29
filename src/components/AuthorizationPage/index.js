import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Field, isInvalid, reduxForm} from "redux-form";
import {loginRequest, registerRequest} from "../../store/user/actionCreators";
import {email, required} from "../../helpers/formValidators";
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
                validate={[required, email]}
            />
          </div>
          <div className={styles.inputRow}>
            <Field
                name="password"
                component="input"
                placeholder="password"
                type="password"
                validate={required}
            />
          </div>
          <button className={styles.submitBtn}
                  type="submit"
                  disabled={this.props.submitDisabled}
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
                validate={[required, email]}
            />
          </div>
          <div className={styles.inputRow}>
            <Field
                name="name"
                component="input"
                placeholder="name"
                type="text"
                validate={required}
            />
          </div>
          <div className={styles.inputRow}>
            <Field
                name="surname"
                component="input"
                placeholder="surname"
                type="text"
                validate={required}
            />
          </div>
          <div className={styles.inputRow}>
            <Field
                name="password"
                component="input"
                placeholder="password"
                type="password"
                validate={required}
            />
          </div>
          <p className={styles.errorMsg}>{}</p>
          <button className={styles.submitBtn}
                  type="submit"
                  disabled={this.props.submitDisabled}
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

AuthorizationPage = reduxForm({
  form: 'authorization',
  initialValues: initialValues
})(AuthorizationPage)

AuthorizationPage = connect(
    (state) => ({
      authFormState: state.form.authorization,
      submitDisabled: isInvalid('authorization')(state) || state.user.activeRequest
    }),

    (dispatch) => ({
      login: () => dispatch(loginRequest()),
      register: () => dispatch(registerRequest())
    })
)(AuthorizationPage)

export default AuthorizationPage;