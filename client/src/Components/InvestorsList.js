import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllInvestors } from '../Redux/ActionDetails/UserActions'
import ChatPopup from './ChatPopup'
import  Usercard  from "./DeveloperViewComponent"

const InvestorsList = () => {

    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const { user } = useSelector(state => state);
    const [getAllInvestorsList, setAllInvestorsList] = useState([]);
    const [activeChatUser, setActiveChatUser] = useState(null);


    useEffect(() => {
        dispatch(getAllInvestors(token));
    }, [dispatch])

    useEffect(() => {
        setAllInvestorsList(user.investors || [])
        console.log("okddo", getAllInvestorsList)
    }, [user])

    const handleChatClick = (userId) => {
        const user = getAllInvestorsList.find((user) => user._id === userId);
        setActiveChatUser(user);
    };
    const handleCloseChat = () => {
        setActiveChatUser(null);
    };


    const colorStyle = { border: "2px solid black" };
    return (
        <div>
        <div>
            {getAllInvestorsList?.filter(developer => developer._id !== userId).map(developer => (<Usercard key={developer._id} user={developer} onChatClick={handleChatClick} />))}
        </div>
        {activeChatUser && (
        <ChatPopup user={activeChatUser} onClose={handleCloseChat} />
      )}
        </div>
    )
}

export default InvestorsList
