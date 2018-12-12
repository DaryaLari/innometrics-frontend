import { getResponseError } from '../../helpers/errorProcessors'
import {TYPES as ACTIVITIES_TYPES} from './actionTypes'
import {getRequest} from '../../helpers/api'

export const getActivitiesRequest = () => (dispatch, getState) => {
  dispatch({type: ACTIVITIES_TYPES.GET_ACTIVITIES_REQUEST})

  getRequest('/activity', {offset: 0, amount_to_return: 10}, true)
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
        dispatch({type: ACTIVITIES_TYPES.GET_ACTIVITIES_FAILURE, error: getResponseError(error.status, '/activity', 'get')})
      })
}