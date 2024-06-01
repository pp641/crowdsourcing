import {
    SIGN_IN,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAILED
  } from '../ActionTypes/AuthActionTypes';
  
  const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: action.payload.user,  
          isAuthenticated: true,
          loading: false,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          error: action.payload.error, 
          isAuthenticated: false,
          loading: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload.userId,  
          isAuthenticated: true,
          loading: false,
        };
      case LOGIN_FAILED:
        return {
          ...state,
          error: action.payload.error, 
          isAuthenticated: false,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;



  