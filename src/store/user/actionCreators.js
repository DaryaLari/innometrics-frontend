import _ from 'lodash'
import {TYPES as USER_TYPES} from './actionTypes'
import {postRequest} from '../../helpers/api'
import { redirectFromAuth } from '../../helpers/authenticationUtils'

export const loginRequest = () => (dispatch, getState) => {
  dispatch({type: USER_TYPES.LOGIN_REQUEST})

  const userData = getState().form.authorization.values
  const params = {
    email: userData.email.trim(),
    password: userData.password.trim()
  }

  postRequest('/login', params)
      .then((result) => {
        dispatch({type: USER_TYPES.LOGIN_SUCCESS, token: result.data.token})
        redirectFromAuth()
      })
      .catch((error) => {
        dispatch({type: USER_TYPES.LOGIN_FAILURE, error: error.data.message})
      })
}

export const registerRequest = () => (dispatch, getState) => {
  dispatch({type: USER_TYPES.REGISTER_REQUEST})

  const userData = getState().form.authorization.values
  const params = {
    email: userData.email.trim(),
    password: userData.password.trim(),
    name: userData.name.trim(),
    surname: userData.surname.trim()
  }

  postRequest('/user', params)
      .then((result) => {
        dispatch({type: USER_TYPES.REGISTER_SUCCESS})
        loginRequest()(dispatch, getState)
      })
      .catch((error) => {
        dispatch({type: USER_TYPES.REGISTER_FAILURE, error: error.data.message})
      })
}

export const logoutRequest = () => (dispatch, getState) => {
  dispatch({type: USER_TYPES.LOGOUT_REQUEST})

  postRequest('/logout', {})
      .then((result) => {
        dispatch({type: USER_TYPES.LOGOUT_SUCCESS})
      })
      .catch((error) => {
        dispatch({type: USER_TYPES.LOGOUT_FAILURE, error: error.data.message})
      })
}