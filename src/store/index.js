import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {reducer as formReducer} from 'redux-form'
import {reducer as userReducer} from './user/reducer'
import {reducer as activitiesReducer} from './activities/reducer'

const reducer = combineReducers({
  form: formReducer,
  user: userReducer,
  activities: activitiesReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))