import {
  CREATE_NEW_PROJECT_FAILED,
  CREATE_NEW_PROJECT_SUCCESS,
  DELETE_SINGLE_PROJECT_FAILED,
  DELETE_SINGLE_PROJECT_SUCCESS,
  GET_ALL_PROJECTS_FAILED,
  GET_ALL_PROJECTS_SUCCESS,
  GET_SINGLE_PROJECT_FAILED,
  GET_SINGLE_PROJECT_SUCCESS,
  UPDATE_SINGLE_PROJECT_FAILED,
  UPDATE_SINGLE_PROJECT_SUCCESS,
} from "../ActionTypes/ProjectActionTypes";

export const createNewProject = (project, token) => async (dispatch) => {
  try {
    const data = await postData("/projects", project, token);
    dispatch({ type: CREATE_NEW_PROJECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_NEW_PROJECT_FAILED, payload: error.message });
  }
};

export const getAllProjects = (token) => async (dispatch) => {
  try {
    const data = await getData("/projects", {}, token);
    dispatch({ type: GET_ALL_PROJECTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_PROJECTS_FAILED, payload: error.message });
  }
};

export const getSingleProject = (id, token) => async (dispatch) => {
  try {
    const data = await getDataById("/projects", id, token);
    dispatch({ type: GET_SINGLE_PROJECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SINGLE_PROJECT_FAILED, payload: error.message });
  }
};

export const updateSingleProject = (id, project, token) => async (dispatch) => {
  try {
    const data = await putData("/projects", id, project, token);
    dispatch({ type: UPDATE_SINGLE_PROJECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_SINGLE_PROJECT_FAILED, payload: error.message });
  }
};

export const deleteSingleProject = (id, token) => async (dispatch) => {
  try {
    const data = await deleteData("/projects", id, token);
    dispatch({ type: DELETE_SINGLE_PROJECT_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_SINGLE_PROJECT_FAILED, payload: error.message });
  }
};
