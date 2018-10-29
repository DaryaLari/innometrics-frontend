import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Field, isInvalid, reduxForm} from "redux-form";
import Input from "../Input";
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
          <Field
            name="email"
            component={Input}
            label="Email"
            placeholder="Email"
            type="email"
            validate={[required, email]}
          />
          <Field
            name="password"
            component={Input}
            label="Password"
            placeholder="Password"
            type="password"
            validate={required}
          />
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
          <Field
            name="email"
            component={Input}
            label="Email"
            placeholder="Email"
            type="email"
            validate={[required, email]}
          />
          <Field
            name="name"
            component={Input}
            label="Name"
            placeholder="Name"
            type="text"
            validate={required}
          />
          <Field
            name="surname"
            component={Input}
            label="Surname"
            placeholder="Surname"
            type="text"
            validate={required}
          />
          <Field
            name="password"
            component={Input}
            label="Password"
            placeholder="Password"
            type="password"
            validate={required}
          />
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