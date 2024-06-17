import { deleteData, getData, getDataById, postData, putData } from "../../utils/restApiTemplates";
import {
  CREATE_NEW_PROJECT_FAILED,
  CREATE_NEW_PROJECT_SUCCESS,
  DELETE_SINGLE_PROJECT_FAILED,
  DELETE_SINGLE_PROJECT_SUCCESS,
  GET_ALL_PROJECTS_BY_USER,
  GET_ALL_PROJECTS_FAILED,
  GET_ALL_PROJECTS_SUCCESS,
  GET_SINGLE_PROJECT_FAILED,
  GET_SINGLE_PROJECT_SUCCESS,
  UPDATE_SINGLE_PROJECT_FAILED,
  UPDATE_SINGLE_PROJECT_SUCCESS,
} from "../ActionTypes/ProjectActionTypes";

export const createNewProject = (project, token) => async (dispatch) => {
  try {
    const data = await postData("/api/createProject", project, token);
    dispatch({ type: CREATE_NEW_PROJECT_SUCCESS, payload: data.data });
    return data;
  } catch (error) {
    dispatch({ type: CREATE_NEW_PROJECT_FAILED, payload: error.message });
  }
};

export const getAllProjects = (token) => async (dispatch) => {
  try {
    const data = await getData("/api/getAllProjects", {}, token);
    dispatch({ type: GET_ALL_PROJECTS_SUCCESS, payload: data.data });
    return data;
  } catch (error) {
    dispatch({ type: GET_ALL_PROJECTS_FAILED, payload: error.message });
  }
};

export const getSingleProject = (id, token) => async (dispatch) => {
  try {
    const data = await getDataById("/api/project", id, token)
    dispatch({ type: GET_SINGLE_PROJECT_SUCCESS, payload: data.data });
    return data;
  } catch (error) {
    dispatch({ type: GET_SINGLE_PROJECT_FAILED, payload: error.message });
  }
};

export const updateSingleProject = (id, project, token) => async (dispatch) => {
  try {
    const data = await putData("/api/projects", id, project, token).data;
    dispatch({ type: UPDATE_SINGLE_PROJECT_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({ type: UPDATE_SINGLE_PROJECT_FAILED, payload: error.message });
  }
};

export const deleteSingleProject = (id, token) => async (dispatch) => {
  try {
    const data = await deleteData("/projects", id, token).data;
    dispatch({ type: DELETE_SINGLE_PROJECT_SUCCESS, payload: id });
    return data;
  } catch (error) {
    dispatch({ type: DELETE_SINGLE_PROJECT_FAILED, payload: error.message });
  }
};

export const getAllProjectsByUser = (user_id, token) => async (dispatch) => {
  try {
    const data = await getData(`/api/user/${user_id}/projects`, {}, token)
    console.log("okss", data);
    dispatch({ type: GET_ALL_PROJECTS_BY_USER, payload: data.data });
    return data;
  } catch (error) {
    dispatch({ type: GET_ALL_PROJECTS_FAILED, payload: error.message });
  }
};
