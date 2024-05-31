import { postData } from "../../utils/restApiTemplates";
import {
  openSnackbar,
  showErrorMessage,
  showSuccessMessage,
} from "./AlertAction";

export const registerUser = (data) => async (dispatch) => {
  try {

    const response =  await postData("api/signup", data)
    
    if (response.status === 200 || response.status === 201) {
      dispatch(openSnackbar());
      dispatch(showSuccessMessage("Signup Success"));
    }
    return response.data;
  } catch (error) {
    dispatch(openSnackbar());
    dispatch(showErrorMessage("Signup Error"));
    return;
  }
};


export const LoginUser = (data) => async (dispatch) => {
  try {

    const response =  await postData("api/login", data)
    console.log("resp", response);
    if (response.status === 200 || response.status === 201) {
      localStorage.setItem("token", response.data.token)
      dispatch(openSnackbar());
      dispatch(showSuccessMessage("Signup Success"));
    }
    return response.data;
  } catch (error) {
    dispatch(openSnackbar());
    dispatch(showErrorMessage("Signup Error"));
    return;
  }
};
