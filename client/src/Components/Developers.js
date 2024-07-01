import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDevelopers } from '../Redux/ActionDetails/UserActions';
import ChatPopup from './ChatPopup';
import { Container, Box } from '@mui/material';
import io from 'socket.io-client';
import Usercard from "./DeveloperViewComponent";
import SearchBar from './searchBar';
import "../Styles/user_card_style.css"

const Developers = () => {
  const socket = io('http://localhost:5000');
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const user1 = localStorage.getItem('userId');
  const [userId, setUserId] = useState(user1);
  const { user } = useSelector(state => state);
  const [getAllDeveloperList, setAllDeveloperList] = useState([]);
  const [activeChatUser, setActiveChatUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const userState = useSelector(state => state).user
  const { chatBetweenTwoUsers } = userState;
  const openChatButton = document.getElementById('open-chat');
  const messageTextArea = document.getElementById('message');
  const chatPopup = document.getElementById('chat-popup');
  const closeButton = document.getElementById('close-chat');
  const minimizeButton = document.getElementById('minimize-chat');

  openChatButton?.addEventListener('click', function() {
  chatPopup.classList.toggle('visible');
  console.log("messagee", messageTextArea )
  });

  closeButton?.addEventListener('click', function() {
  chatPopup.classList.remove('visible');
  });

minimizeButton?.addEventListener('click', function() {

});

minimizeButton?.addEventListener('click', function() {
  chatPopup.classList.toggle('minimized');
});

minimizeButton?.addEventListener('click', function() {
  chatPopup.classList.toggle('minimized');
});





  useEffect(() => {
    socket.emit('join', { userId });
    socket.on('receiveMessage', ({ senderId, message }) => {
      setMessages(prevMessages => [...prevMessages, { senderId, message }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  useEffect(() => {
    setMessages(chatBetweenTwoUsers.chats)
  }, [chatBetweenTwoUsers])

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
    <Container >
      <SearchBar maxWidth="sm" onSearch={handleSearch} />
      <Box className='user-card-outer'>
        {filteredDevelopers.filter(developer => developer._id !== userId).map(developer => (
          <Usercard key={developer._id} user={developer} onChatClick={handleChatClick} />
        ))}
      </Box>
      {activeChatUser && (
        <ChatPopup user={activeChatUser} onClose={handleCloseChat} />
      )}
      <div id="chat-popup" class="hidden">
        <div class="chat-header">
          <button id="close-chat">X</button>
          <button id="minimize-chat">-</button>
        </div>
        <p>This is the chat window.</p>
        <ul className='chat-outer-box'>
        {messages?.map((msg, index) => (
          <li key={index} className={user1 === msg.sender ? 'sender-chat' : 'recepient-chat' } >
            {msg.content}
          </li>
        ))}
      </ul>
        <textarea name="message" id="message" placeholder="Type your message..."></textarea>
        <button id="send-message">Send</button>
      </div>
    </Container>
  );
};

export default Developers;
