import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your server address


const Chat = () => {
  const user1 = localStorage.getItem('userId');
  const [userId, setUserId] = useState(user1); 
  const [otherUserId, setOtherUserId] = useState('667191d0f592cabe455a47b2'); 
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('join', { userId });
    socket.on('receiveMessage', ({ senderId, message }) => {
      setMessages(prevMessages => [...prevMessages, { senderId, message }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('sendMessage', { senderId: userId, receiverId: otherUserId, message : message });
      setMessages(prevMessages => [...prevMessages, { senderId: userId, message }]);
      setMessage('');
    }
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.senderId}</strong>: {msg.message}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
