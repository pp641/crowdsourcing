import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDevelopers } from '../Redux/ActionDetails/UserActions'
import ChatPopup from './ChatPopup'
import { TextField, Button, Container, Box } from '@mui/material';
import  Usercard  from "./DeveloperViewComponent"
import SearchBar from './searchBar'

const Developers = () => {

    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const { user } = useSelector(state => state);
    const [getAllDeveloperList, setAllDeveloperList] = useState([]);
    const [activeChatUser, setActiveChatUser] = useState(null);


    useEffect(() => {
        dispatch(getAllDevelopers(token));
    }, [dispatch])

    useEffect(() => {
        setAllDeveloperList(user.developers || [])
    }, [user])

    const handleChatClick = (userId) => {
        const user = getAllDeveloperList.find((user) => user._id === userId);
        setActiveChatUser(user);
    };
    const handleCloseChat = () => {
        setActiveChatUser(null);
    };


    const colorStyle = { border: "2px solid black" };
    return (
    <Container maxWidth="sm">

        <div>
            <SearchBar/>
        <div>
            {getAllDeveloperList.filter(developer => developer._id !== userId).map(developer => (<Usercard key={developer._id} user={developer} onChatClick={handleChatClick} />))}
        </div>
        {activeChatUser && (
        <ChatPopup user={activeChatUser} onClose={handleCloseChat} />
      )}
        </div>
    </Container>
    )
}

export default Developers
