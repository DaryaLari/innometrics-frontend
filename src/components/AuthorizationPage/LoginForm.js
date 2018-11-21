import React from 'react'
import { Link } from 'react-router-dom'
import { Field } from 'redux-form'
import Button from '../Button'
import Input from '../Input'
import { email, required } from '../../helpers/formValidators'
import styles from './style.css'

class LoginForm extends React.Component {
  onSubmit = () => {
    this.props.login()
  }

  componentDidMount(){
    console.log("here")
  }
  render () {
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
        <Button name="Login"
                type="submit"
                style={{width: '100%'}}
                disabled={this.props.submitDisabled}
        />
        <p className={styles.formError}>{this.props.formError}</p>
        <p>Don&#39;t have account yet?&nbsp;
          <Link to="/register">Register</Link>
        </p>
      </form>
    )
  }
}

export default LoginForm;