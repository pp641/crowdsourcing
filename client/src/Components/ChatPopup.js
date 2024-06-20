

import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import io from 'socket.io-client';



    const ChatPopup = ({ user, onClose }) => {
    const socket = io('http://localhost:5000');
    const user1 = localStorage.getItem('userId');
    const [userId, setUserId] = useState(user1);
    const [otherUserId, setOtherUserId] = useState(user._id);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const userState = useSelector(state => state).user
    const {chatBetweenTwoUsers} = userState;

    useEffect(() => {
        socket.emit('join', { userId });
        socket.on('receiveMessage', ({ senderId, message }) => {
            setMessages(prevMessages => [...prevMessages, { senderId, message }]);
        });

        return () => {
            socket.disconnect();
        };
    }, [userId]);


    useEffect(()=>{
        console.log("okd", chatBetweenTwoUsers)
        setMessages(chatBetweenTwoUsers.chats)                
    },[userState])

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit('sendMessage', { senderId: userId, receiverId: otherUserId, message: message });
            setMessages(prevMessages => [...prevMessages, { senderId: userId, message }]);
            setMessage('');
        }
    };

    return (
        <div className="chat-popup">
            <div className="chat-header">
                <h4>Chat with {user.firstName}  {user.lastName}</h4>
                <button onClick={onClose}>Close</button>
            </div>
            <div className="chat-body">
                <p>Chat content goes here...</p>
            </div>
            <ul>
                {messages?.map((msg, index) => (
                    <li key={index}>
                        <strong>{msg.sender}</strong>: {msg.content}
                        <strong>{msg.receiver}</strong>
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

export default ChatPopup;



