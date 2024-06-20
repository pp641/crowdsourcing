import { GET_ALL_DEVELOPERS, GET_ALL_DEVELOPERS_FAILED , GET_ALL_CHATS_USER_WISE , GET_ALL_CHATS_USER_WISE_FAILED } from '../ActionTypes/UserActionTypes'
import { getData } from '../../utils/restApiTemplates'

export const getAllDevelopers = (token) => async (dispatch) => {
    try {
        const data = await getData("/api/getAllDevelopers", {}, token);
        dispatch({ type: GET_ALL_DEVELOPERS, payload: data.data });
        return data;
    } catch (error) {
        dispatch({ type: GET_ALL_DEVELOPERS_FAILED, payload: error.message });
    }
} 


export const getAllChatsUserWise = (senderId, receiverId,token) => async (dispatch) => {
    try {
        const data = await getData(`/api/getAllChats/${senderId}/${receiverId}`,{}, token);
        dispatch({type : GET_ALL_CHATS_USER_WISE  , payload : data.data}); 
    }catch(error){
        dispatch({type : GET_ALL_CHATS_USER_WISE_FAILED , payload : error.message});
    }
}


