import React from 'react'
import Input from '../Input'
import { email, required } from '../../helpers/formValidators'

class LoginForm extends React.Component {
  onSubmit = () => {
    this.props.login()
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
                disabled={this.props.submitDisabled}
        />
        <p>Don&#39;t have account yet?&nbsp;
          <Link to="/register">Register</Link>
        </p>
      </form>
    )
  }
}

export default LoginForm;