import {TYPES as PROJECTS_TYPES} from "./actionTypes";
import {TYPES as USER_TYPES} from "../user/actionTypes";
import {getRequest} from "../../helpers/api";
import { removeUserFromLocalStorage } from '../../helpers/user'

export const getProjectsRequest = () => (dispatch, getState) => {
  dispatch({type: PROJECTS_TYPES.GET_PROJECTS_REQUEST})

  dispatch({
    type: PROJECTS_TYPES.GET_PROJECTS_SUCCESS,
    payload: {
      projects: [{name: "proj-1"}, {name: "proj-2"}, {name: "proj-3"}]
    }
  })

/*  getRequest('/projects', {}, true)
      .then((result) => {
        dispatch({
          type: PROJECTS_TYPES.GET_PROJECTS_SUCCESS,
          payload: {
            projects: result.data.projects
          }
        })
      })
      .catch((error) => {
        if(error == undefined){
          dispatch({type: PROJECTS_TYPES.GET_PROJECTS_FAILURE, error: "No response"})
          return
        }
        switch(error.status){
          case 401:
            removeUserFromLocalStorage()
            dispatch({type: USER_TYPES.LOGOUT_SUCCESS})
            break
          default:
            dispatch({type: PROJECTS_TYPES.GET_PROJECTS_FAILURE, error: error})
        }
      })*/
}