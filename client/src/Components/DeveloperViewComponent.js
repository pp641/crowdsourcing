import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getAllChatsUserWise} from '../Redux/ActionDetails/UserActions'

const UserCard = ({ user, onChatClick }) => {

    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();

    const performChatView = () => {
        onChatClick(user._id);
        dispatch(getAllChatsUserWise(userId , user._id , token ));
    }

  return (
    <div className="user-card"> 
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <h3>{user.email}</h3>
      <button onClick={performChatView}>Chat</button>
    </div>
  );
};

export default UserCard;
