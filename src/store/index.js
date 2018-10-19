import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {reducer as formReducer} from 'redux-form'
import {reducer as userReducer} from "./user/reducer";

const reducer = combineReducers({
  form: formReducer,
  user: userReducer
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));