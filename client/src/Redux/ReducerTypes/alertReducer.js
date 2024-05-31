
import {
    ALERT_SUCCESS_MESSAGE,
    ALERT_WARNING_MESSAGE,
    ALERT_ERROR_MESSAGE,
    ALERT_INFO_MESSAGE,
    ALERT_SNACKBAR_OPEN,
    ALERT_SNACKBAR_CLOSE,
  } from '../ActionTypes/AlertActionTypes';
  
  const initialState = {
    open: false,
    message: '',
    severity: 'success', 
  };
  
  const alertReducer = (state = initialState, action) => {
    switch (action.type) {
      case ALERT_SUCCESS_MESSAGE:
        return { ...state, open: true, message: action.payload, severity: 'success' };
      case ALERT_WARNING_MESSAGE:
        return { ...state, open: true, message: action.payload, severity: 'warning' };
      case ALERT_ERROR_MESSAGE:
        return { ...state, open: true, message: action.payload, severity: 'error' };
      case ALERT_INFO_MESSAGE:
        return { ...state, open: true, message: action.payload, severity: 'info' };
      case ALERT_SNACKBAR_OPEN:
        return { ...state, open: true };
      case ALERT_SNACKBAR_CLOSE:
        return { ...state, open: false };
      default:
        return state;
    }
  };
  
  export default alertReducer;
  