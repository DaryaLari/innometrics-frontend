import {TYPES as ACTIVITIES_TYPES} from "./actionTypes";
import {TYPES as USER_TYPES} from "../user/actionTypes";
import {getRequest} from "../../helpers/api";
import { removeUserFromLocalStorage } from '../../helpers/user'

export const getActivitiesRequest = () => (dispatch, getState) => {
  dispatch({type: ACTIVITIES_TYPES.GET_ACTIVITIES_REQUEST})

  getRequest('/activity', {offset: 0, amount_to_return: 100}, true)
      .then((result) => {
        dispatch({
          type: ACTIVITIES_TYPES.GET_ACTIVITIES_SUCCESS,
          payload: {
            activities: result.data.activities,
            offset: 0,
            amount_to_return: 100
          }
        })
      })
      .catch((error) => {
        if(error == undefined){
          dispatch({type: ACTIVITIES_TYPES.GET_ACTIVITIES_FAILURE, error: "No response"})
          return
        }
        switch(error.status){
          case 401:
            removeUserFromLocalStorage()
            dispatch({type: USER_TYPES.LOGOUT_SUCCESS})
            break
          default:
            dispatch({type: ACTIVITIES_TYPES.GET_ACTIVITIES_FAILURE, error: error})
        }
      })
}