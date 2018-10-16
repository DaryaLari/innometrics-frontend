import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {reducer as formReducer} from 'redux-form'

const reducer = combineReducers({
  form: formReducer
  //, next_reducer: reducer
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));