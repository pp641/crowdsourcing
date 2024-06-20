import {
    GET_ALL_DEVELOPERS,
    GET_ALL_DEVELOPERS_FAILED,
    GET_CURRENT_CHAT_USER_WISE,
    GET_ALL_CHATS_USER_WISE,
    GET_ALL_CHATS_USER_WISE_FAILED
} from '../ActionTypes/UserActionTypes'

const initialState = {
    developers : [],
    error : null,
    chatBetweenTwoUsers : [],
    currentChat : {},
    chatloadingError : null
}

const userReducer = (state = initialState , action) => {
    switch(action.type){
        case GET_ALL_DEVELOPERS:
            return {
                ...state,
                developers : action.payload,
                error : null
            };
        case GET_ALL_DEVELOPERS_FAILED:
            return {
                ...state,
                developers: [],
                error : action.payload
            };
        case GET_ALL_CHATS_USER_WISE:
            return{
                ...state,
                chatBetweenTwoUsers : action.payload
            }
        case GET_ALL_CHATS_USER_WISE_FAILED:
            return {
                ...state,
                chatloadingError : action.payload
            }
        default:
            return state;
    }
};

export default userReducer ;

