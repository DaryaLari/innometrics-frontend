import {TYPES as USER_TYPES} from "./actionTypes";
import {userAuthorized} from "../../utils";

const initialState = {
  authorized: userAuthorized(),
  activeRequest: false,
  failed: false,
  error: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TYPES.LOGIN_REQUEST:
    case USER_TYPES.REGISTER_REQUEST:
      return {
        authorized: false,
        activeRequest: true,
        failed: false,
        error: null
      }

    case USER_TYPES.LOGIN_SUCCESS:
    case USER_TYPES.REGISTER_SUCCESS:
      return {
        authorized: true,
        activeRequest: false,
        failed: false,
        error: null
      }

    case USER_TYPES.LOGIN_FAIL:
    case USER_TYPES.REGISTER_FAIL:
      return {
        authorized: false,
        activeRequest: false,
        failed: true,
        error: action.error
      }

    // TODO: describe logout actions
    default:
      return state;
  }
}