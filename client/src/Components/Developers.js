import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDevelopers } from '../Redux/ActionDetails/UserActions';
import ChatPopup from './ChatPopup';
import { Container, Box } from '@mui/material';
import Usercard from "./DeveloperViewComponent";
import SearchBar from './searchBar';

const Developers = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const { user } = useSelector(state => state);
  const [getAllDeveloperList, setAllDeveloperList] = useState([]);
  const [activeChatUser, setActiveChatUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getAllDevelopers(token));
  }, [dispatch, token]);

  useEffect(() => {
    setAllDeveloperList(user.developers || []);
  }, [user]);

  const handleChatClick = (userId) => {
    const user = getAllDeveloperList.find((user) => user._id === userId);
    setActiveChatUser(user);
  };

  const handleCloseChat = () => {
    setActiveChatUser(null);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredDevelopers = getAllDeveloperList.filter(developer => {
    const { username, firstName, email } = developer;
    const lowercasedTerm = searchTerm?.toLowerCase();
    return (
      username?.toLowerCase().includes(lowercasedTerm) ||
      firstName?.toLowerCase().includes(lowercasedTerm) ||
      email?.toLowerCase().includes(lowercasedTerm)
    );
  });

  return (
    <Container maxWidth="sm">
      <SearchBar onSearch={handleSearch} />
      <Box mt={2}>
        {filteredDevelopers.filter(developer => developer._id !== userId).map(developer => (
          <Usercard key={developer._id} user={developer} onChatClick={handleChatClick} />
        ))}
      </Box>
      {activeChatUser && (
        <ChatPopup user={activeChatUser} onClose={handleCloseChat} />
      )}
    </Container>
  );
};

export default Developers;
