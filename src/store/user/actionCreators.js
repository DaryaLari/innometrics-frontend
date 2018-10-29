import {TYPES as USER_TYPES} from "./actionTypes";
import {getRequest, postRequest} from "../../helpers/api";
import {history} from "../../helpers/history"

export const loginRequest = () => (dispatch, getState) => {
  dispatch({type: USER_TYPES.LOGIN_REQUEST})

  const userData = getState().form.authorization.values
  const params = {
    email: userData.email.trim(),
    password: userData.password.trim()
  }

  postRequest('/login', params)
      .then((result) => {
        localStorage.setItem("user", JSON.stringify({}))
        const nextLocation = history.location.state !== undefined ? history.location.state.from : '/'
        history.push(nextLocation)
        dispatch({type: USER_TYPES.LOGIN_SUCCESS})
      })
      .catch((error) => {
        dispatch({type: USER_TYPES.LOGIN_FAILURE, error: error})
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
        localStorage.setItem("user", JSON.stringify({}))
        const nextLocation = history.location.state !== undefined ? history.location.state.from : '/'
        history.push(nextLocation)
        dispatch({type: USER_TYPES.REGISTER_SUCCESS})
      })
      .catch((error) => {
        dispatch({type: USER_TYPES.REGISTER_FAILURE, error: error})
      })
}

export const logoutRequest = () => (dispatch, getState) => {
  dispatch({type: USER_TYPES.LOGOUT_REQUEST})

  postRequest('/logout', {})
      .then((result) => {
        dispatch({type: USER_TYPES.LOGOUT_SUCCESS})
      })
      .catch((error) => {
        dispatch({type: USER_TYPES.LOGOUT_FAILURE, error: error})
      })
  localStorage.removeItem("user")
  history.push(history.location.pathname)
}