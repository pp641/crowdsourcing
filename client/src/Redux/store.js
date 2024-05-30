import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import authReducer from './ReducerTypes/authReducer'


const logger  =  createLogger();

const rootReducer = combineReducers({
    auth: authReducer,
  });

  const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  );



export default store;