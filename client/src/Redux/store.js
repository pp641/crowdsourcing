import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import {thunk} from 'redux-thunk';
import authReducer from './ReducerTypes/authReducer'
import alertReducer from './ReducerTypes/alertReducer';
import projectReducer from './ReducerTypes/projectReducer';


const logger  =  createLogger();

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    project: projectReducer,
  });

  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );



export default store;