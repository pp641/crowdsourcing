import {
  ALERT_ERROR_MESSAGE,
  ALERT_INFO_MESSAGE,
  ALERT_SNACKBAR_CLOSE,
  ALERT_SNACKBAR_OPEN,
  ALERT_SUCCESS_MESSAGE,
  ALERT_WARNING_MESSAGE,
} from "../ActionTypes/AlertActionTypes";

export const showSuccessMessage = (message) => ({
  type: ALERT_SUCCESS_MESSAGE,
  payload: message,
});

export const showWarningMessage = (message) => ({
  type: ALERT_WARNING_MESSAGE,
  payload: message,
});

export const showErrorMessage = (message) => ({
  type: ALERT_ERROR_MESSAGE,
  payload: message,
});

export const showInfoMessage = (message) => ({
  type: ALERT_INFO_MESSAGE,
  payload: message,
});

export const openSnackbar = () => ({
  type: ALERT_SNACKBAR_OPEN,
});

export const closeSnackbar = () => ({
  type: ALERT_SNACKBAR_CLOSE,
});
