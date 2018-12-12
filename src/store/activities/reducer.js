import {TYPES as ACTIVITIES_TYPES} from './actionTypes'
import {TYPES as USER_TYPES} from '../user/actionTypes'

const initialState = {
  activities: [],
  offset: 0,
  amount_to_return: 0,

  activeRequest: false,
  failed: false,
  error: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVITIES_TYPES.INIT_ACTIVITIES:
    case USER_TYPES.LOGIN_SUCCESS:
    case USER_TYPES.LOGOUT_SUCCESS:
    case USER_TYPES.LOGOUT_FAILURE:
      return initialState


    case ACTIVITIES_TYPES.GET_ACTIVITIES_REQUEST:
      return {
        ...state,
        activeRequest: true,
        failed: false,
        error: null
      }

    case ACTIVITIES_TYPES.GET_ACTIVITIES_SUCCESS:
      return {
        activities: action.payload.activities,
        offset: action.payload.offset,
        amount_to_return: action.payload.amount_to_return,
        activeRequest: false,
        failed: false,
        error: null
      }

    case ACTIVITIES_TYPES.GET_ACTIVITIES_FAILURE:
      return {
        ...state,
        activeRequest: false,
        failed: true,
        error: action.error
      }

    default:
      return state
  }
}