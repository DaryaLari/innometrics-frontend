import React from 'react'
import Input from '../Input'
import { email, required } from '../../helpers/formValidators'

class RegistrationForm extends React.Component {
  onSubmit = () => {
    this.props.register()
  }

  render () {
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
        <Button name="Register"
                type="submit"
                disabled={this.props.submitDisabled}
        />
        <p>Have account already?
          <Link to="/login">Login</Link>
        </p>
      </form>
    )
  }
}

export default RegistrationForm;