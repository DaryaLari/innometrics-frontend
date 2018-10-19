import {TYPES as USER_TYPES} from "./actionTypes";
import {postRequest} from "../../api";

export const loginRequest = () => (dispatch, getState) => {
  dispatch({type: USER_TYPES.LOGIN_REQUEST})

  const userData = getState().form.authorization.values
  const params = {
    email: userData.email,
    password: userData.password
  }

  postRequest('/login', params)
      .then((result) => {
        localStorage.setItem("user", JSON.stringify({}));
        dispatch({type: USER_TYPES.LOGIN_SUCCESS})
      })
      .catch((error) => {
        dispatch({type: USER_TYPES.LOGIN_FAIL, error: error})
      })
}

export const registerRequest = () => (dispatch, getState) => {
  dispatch({type: USER_TYPES.REGISTER_REQUEST})

  const userData = getState().form.authorization.values
  const params = {
    email: userData.email,
    password: userData.password,
    name: userData.name,
    surname: userData.surname
  }

  postRequest('/user', params)
      .then((result) => {
        localStorage.setItem("user", JSON.stringify({}));
        dispatch({type: USER_TYPES.REGISTER_SUCCESS})
      })
      .catch((error) => {
        dispatch({type: USER_TYPES.REGISTER_FAIL, error: error})
      })
}

export const logoutRequest = () => (dispatch, getState) => {
  dispatch({type: USER_TYPES.LOGOUT_REQUEST})

  postRequest('/logout', {})
      .then((result) => {
        localStorage.removeItem("user")
        dispatch({type: USER_TYPES.LOGOUT_SUCCESS})
      })
      .catch((error) => {
        dispatch({type: USER_TYPES.LOGOUT_FAIL, error: error})
      })
}