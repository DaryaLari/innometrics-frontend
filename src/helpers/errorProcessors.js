import {store} from '../store'
import { TYPES as USER_TYPES } from '../store/user/actionTypes'

export const processApiError = (error) => {

  switch(_.get(error.response, 'status', 0)){
    case 0:
      return {status: 0, statusText: 'No Internet connection', data: { message: 'No Internet connection'}}
    case 401:
      store.dispatch({type: USER_TYPES.UNAUTHORIZED})
      return error.response
    default:
      return error.response
  }
}