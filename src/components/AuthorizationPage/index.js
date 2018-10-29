import React from 'react'
import { connect } from 'react-redux'
import { isInvalid, reduxForm } from 'redux-form'
import { loginRequest, registerRequest } from '../../store/user/actionCreators'
import { userAuthorized } from '../../helpers/selectors'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import styles from './style.css'

class AuthPage extends React.Component {
  render(){
    return (
        <div className={styles.content}>
          {(this.props.match.path === "/login") ?
             <LoginForm {...this.props}/> : <RegistrationForm {...this.props}/>
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

let AuthorizationPage = reduxForm({
  form: 'authorization',
  initialValues: initialValues
})(AuthPage)

AuthorizationPage = connect(
    (state) => ({
      authorized: userAuthorized(state),
      authFormState: state.form.authorization,
      formError: state.user.error,
      submitDisabled: isInvalid('authorization')(state) || state.user.activeRequest
    }),

    (dispatch) => ({
      login: () => dispatch(loginRequest()),
      register: () => dispatch(registerRequest())
    })
)(AuthorizationPage)

export default AuthorizationPage;