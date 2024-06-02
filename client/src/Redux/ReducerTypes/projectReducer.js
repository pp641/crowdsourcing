import {
    CREATE_NEW_PROJECT_SUCCESS,
    CREATE_NEW_PROJECT_FAILED,
    GET_ALL_PROJECTS_SUCCESS,
    GET_ALL_PROJECTS_FAILED,
    GET_SINGLE_PROJECT_SUCCESS,
    GET_SINGLE_PROJECT_FAILED,
    UPDATE_SINGLE_PROJECT_SUCCESS,
    UPDATE_SINGLE_PROJECT_FAILED,
    DELETE_SINGLE_PROJECT_SUCCESS,
    DELETE_SINGLE_PROJECT_FAILED,
    GET_ALL_PROJECTS_BY_USER,
  } from '../ActionTypes/ProjectActionTypes';
  
  const initialState = {
    projects: [],
    projectsByUser: [],
    project: null,
    loading: false,
    error: null,
  };
  
  const projectReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_NEW_PROJECT_SUCCESS:
        return {
          ...state,
          projects: [...state.projects, action.payload],
          loading: false,
          error: null,
        };
      case CREATE_NEW_PROJECT_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case GET_ALL_PROJECTS_BY_USER:
        return{
            ...state,
            projectsByUser: action.payload,
            loading: false,
            error: null,
          };
      case GET_ALL_PROJECTS_SUCCESS:
        return {
          ...state,
          projects: action.payload,
          loading: false,
          error: null,
        };
      case GET_ALL_PROJECTS_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case GET_SINGLE_PROJECT_SUCCESS:
        return {
          ...state,
          project: action.payload,
          loading: false,
          error: null,
        };
      case GET_SINGLE_PROJECT_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case UPDATE_SINGLE_PROJECT_SUCCESS:
        return {
          ...state,
          projects: state.projects.map((project) =>
            project.id === action.payload.id ? action.payload : project
          ),
          loading: false,
          error: null,
        };
      case UPDATE_SINGLE_PROJECT_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_SINGLE_PROJECT_SUCCESS:
        return {
          ...state,
          projects: state.projects.filter(
            (project) => project.id !== action.payload
          ),
          loading: false,
          error: null,
        };
      case DELETE_SINGLE_PROJECT_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default projectReducer;
  